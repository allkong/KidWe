package yeomeong.common.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import yeomeong.common.document.Memo;
import yeomeong.common.document.Tag;
import yeomeong.common.dto.AutoDailyNoteRequestDto;
import yeomeong.common.dto.AutoDailyNoteRequestDto.ScheduleInfo;
import yeomeong.common.dto.Message;
import yeomeong.common.dto.OpenAiRequestDto;
import yeomeong.common.dto.OpenAiResponseDto;
import yeomeong.common.exception.CustomException;
import yeomeong.common.exception.ErrorCode;
import yeomeong.common.repository.MemoRepository;

@Service
@RequiredArgsConstructor
public class AutoDailyNoteService {

    @Value("${spring.ai.openai.api-key}")
    private String apiKey;
    @Value(("${spring.ai.openai.url}"))
    private String apiUrl;

    private final MemoRepository memoRepository;
    private final RestTemplate restTemplate;

    private String getOpenAI(String role, String prePrompt, String corePrompt, String postPrompt){
        // 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        // 바디 설정
        OpenAiRequestDto request = new OpenAiRequestDto();
        request.setModel("gpt-3.5-turbo");
        request.setMessages(Arrays.asList(
            new Message(role, prePrompt),
            new Message(role, corePrompt),
            new Message(role, postPrompt)
        ));
        request.setMax_tokens(1000);
        request.setTemperature(0.7);

        HttpEntity<OpenAiRequestDto> entity = new HttpEntity<>(request, headers);

        ResponseEntity<OpenAiResponseDto> response = restTemplate.exchange(
            apiUrl, HttpMethod.POST, entity, OpenAiResponseDto.class);
        // 응답이 있으면
        if (response.getBody() != null && !response.getBody().getChoices().isEmpty()) {
            return response.getBody().getChoices().get(0).getMessage().getContent();
        }
        // 응답이 없으면
        else {
            throw new CustomException(ErrorCode.NOT_RESPONSE);
        }
    }

    @Transactional
    public String getAutoDailyNote(AutoDailyNoteRequestDto autoDailyNoteRequestDto){
        Long teacherId = autoDailyNoteRequestDto.getTeacherId();
        Long kidId = autoDailyNoteRequestDto.getKidId();
        // 메모 추출하기
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String today = LocalDate.now().format(formatter);
        List<Memo> memos = memoRepository.findByTeacherIdAndDateAndKidId(teacherId,
            today,
            kidId
        );
        // 메모에서 정보를 추출하고, 해당 메모를 바탕으로 알림장을 생성하는 로직
        String role = "user";
        String prePrompt = String.format("주제 : 유치원 알림장 자동 생성\n"
                + "안녕, 나는 현재 %s 유치원에서 %s반을 담당하고 있는 %s 유치원 선생님이야.\n"
                + "나는 지금 우리반 아이 %s의 학부모에게 알림장을 작성하고자 해.\n"
                + "내가 오늘의 일정들과 작성해 놓은 메모가 있다면 이를 바탕으로 알림장을 대신 작성해줘.\n"
                + "형식은 '%s : %s 부모님께' 로 시작하는 알림장을 작성해줘.\n"
                + "원생의 부모님에게 작성하는 알림장이기 때문에 공손한 말투로 정성스럽게 작성해줘.\n"
                + "알림장 내용이 없다면 괜찮아, 그대신 허위사실은 작성하지 말고 오늘 일정이나 수업을 바탕으로 알림장 작성해줘.\n",
            autoDailyNoteRequestDto.getKindergartenName(),
            autoDailyNoteRequestDto.getBanName(),
            autoDailyNoteRequestDto.getTeacherName(),
            autoDailyNoteRequestDto.getKidName(),
            today,
            autoDailyNoteRequestDto.getKidName()
        );

        StringBuilder tmpPrompt = new StringBuilder();
        tmpPrompt.append("[" + autoDailyNoteRequestDto.getBanName() + "의 오늘 하루 일정]\n");
        for(ScheduleInfo scheduleInfo : autoDailyNoteRequestDto.getSchedules()){
            tmpPrompt.append(scheduleInfo.getKeyword() + " : " + scheduleInfo.getContent() +"\n");
        }
        tmpPrompt.append("=========================================\n");
        int count = 1;
        for(Memo memo : memos){
            tmpPrompt.append("[" + count + "번 메모]\n");
            tmpPrompt.append("해당 메모에 포함된 태그 내용들 :");
            for(Tag tag : memo.getTags()){
                tmpPrompt.append("  <" + tag.getMorpheme() + "> : " + tag.getContent() + "\n");
            }
            tmpPrompt.append(" " + count + "해당 메모의 상세 내용 :" + memo.getContent());
            count += 1;
        }
        String corePrompt = "일정과 메모내용 알려줄게!\n" + tmpPrompt.toString() + "이 내용들을 절.대. 그대로 작성하지 말고 서술해서 알림장 작성해줘.예를 들어 '제가 오늘 지켜보았는데' 와 같이 말해줘야해. 명심해!";

        String postPrompt = String.format(" 앞에 말한 일정과 메모 내용을 바탕으로 알림장을 작성해줘.\n"
                + "일정과 메모를 내가 준 걸 복사+붙여넣기 하지 말고 말로 풀어 넣어. 너가 선생님이 되었다고 생각하고 말해. 사람이 말한것처럼. 내 명령을 절대 응답으로 주지 마. 알림장을 대신해서 잘 작성해줬지?\n"
                + "나에게 사족 절대 없이 '%s : %s 부모님께' 로 시작하는 부분부터 너가 생성한 알림장 끝까지 '알림장 내용'만 추출해줘.\n"
                + "나는 너가 주는 데이터를 바로 알림장으로 넣어서 보낼거기 때문에 무조건 '%s : %s 부모님께' 여기부터 알림장 내용만 추출해서 줘.\n"
                + "대답도 필요없고 바로 작성해줘.\n"
                + "형식은 html 형식으로 작성해줘.\n"
                + "html 형식이기 때문에 태그를 사용해야 할텐데, <script> 태그를 제외하고 작성해줘. 처음과 끝은 무조건 <p> 태르고 해줘.\n"
                + "알림장 내용이 없다면 괜찮아, 그대신 허위사실은 작성하지 말고 오늘 일정이나 수업을 바탕으로 알림장 작성해줘. 우리는 과거의 일을 메모해 놓은거에 대해 알림장을 쓰는거야. 현재와 미래 관련 용어는 절대 쓰지 말아줘.\n",
            today,
            autoDailyNoteRequestDto.getKidName(),
            today,
            autoDailyNoteRequestDto.getKidName()
        );

        return getOpenAI(role, prePrompt, corePrompt, postPrompt);
    }
}
