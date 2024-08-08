package yeomeong.common.dto.post.dailynote.response;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.Getter;
import lombok.NoArgsConstructor;
import yeomeong.common.entity.post.DailyNote;

@Getter
@NoArgsConstructor
public class DailyNoteListResponseDto {
    private Map<Integer, List<DailyNoteListItemResponseDto>> dailyNoteListItemResponseDtos;

    public DailyNoteListResponseDto(List<DailyNote> writedailyNotes, List<DailyNote> recevieddailyNotes) {
        this.dailyNoteListItemResponseDtos = new HashMap<Integer, List<DailyNoteListItemResponseDto>>();
        for(DailyNote dailyNote : writedailyNotes) {
            int day = dailyNote.getSendTime().getDayOfMonth();
            if(!this.dailyNoteListItemResponseDtos.containsKey(day)) {
                this.dailyNoteListItemResponseDtos.put(day, new ArrayList<DailyNoteListItemResponseDto>());
            }
            this.dailyNoteListItemResponseDtos.get(day).add(new DailyNoteListItemResponseDto(dailyNote));
        }
        for(DailyNote dailyNote : recevieddailyNotes) {
            int day = dailyNote.getSendTime().getDayOfMonth();
            if(!this.dailyNoteListItemResponseDtos.containsKey(day)) {
                this.dailyNoteListItemResponseDtos.put(day, new ArrayList<DailyNoteListItemResponseDto>());
            }
            this.dailyNoteListItemResponseDtos.get(day).add(new DailyNoteListItemResponseDto(dailyNote));
        }

        for(Integer day : this.dailyNoteListItemResponseDtos.keySet()) {
            Collections.sort(dailyNoteListItemResponseDtos.get(day), (a, b) -> {
                
                return b.getSendTime().isAfter(a.getSendTime())? -1 : a.getSendTime().isBefore(b.getSendTime()) ? 1 : 0;
            });
        }
    }
}
