package yeomeong.common.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yeomeong.common.dto.menu.request.MenuByDayRequestDto;
import yeomeong.common.dto.menu.request.MenuCreateDto;
import yeomeong.common.dto.menu.response.KidAllergyResponseDto;
import yeomeong.common.dto.menu.response.MenuByDayResponseDto;
import yeomeong.common.entity.kindergarten.Kindergarten;
import yeomeong.common.entity.kindergarten.Menu;
import yeomeong.common.entity.member.Kid;
import yeomeong.common.repository.KidRepository;
import yeomeong.common.repository.KindergartenRepository;
import yeomeong.common.repository.MenuRepository;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import static yeomeong.common.dto.menu.request.MenuCreateDto.*;


@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MenuService {

    private final MenuRepository menuRepository;
    private final KindergartenRepository kindergartenRepository;
    private final KidRepository kidRepository;


    //일자별 메뉴 가져오기
    public MenuByDayResponseDto getMenuByDay(MenuByDayRequestDto menuByDayRequestDto) {
        //메뉴 가져오기
        MenuByDayResponseDto menuByDay = menuRepository.getMenuByDay(menuByDayRequestDto.getDay(), menuByDayRequestDto.getKindergartenId());

        if(menuByDay == null ){
            return menuByDay;
        }

        //해당 유치원의 모든 아이
        List<Kid> allKidsByKindergarten = kidRepository.findAllByKindergarten_Id(menuByDayRequestDto.getKindergartenId());

        for (Kid kid : allKidsByKindergarten) { //모든 아이들에 대해서 검사
            addKidAllergiesToMenu(menuByDay.getLunchAllergies(), kid, menuByDay.getKidAllergyListOfLunch());
            addKidAllergiesToMenu(menuByDay.getSnackAllergies(), kid, menuByDay.getKidAllergyListOfSnack());
            addKidAllergiesToMenu(menuByDay.getDinnerAllergies(), kid, menuByDay.getKidAllergyListOfDinner());
        }

        return menuByDay;
    }

    private void addKidAllergiesToMenu(List<String> menuAllergies, Kid kid, List<KidAllergyResponseDto> kidAllergyListDto){

        List<String> kidAllergyLists = Arrays.stream(kid.getAllergies().split(","))
                .toList();

        for(String menuAllergy : menuAllergies){

            for(String kidAllergy : kidAllergyLists)
                if(kidAllergy.contains(menuAllergy)){
                    kidAllergyListDto.add(new KidAllergyResponseDto(
                        kid.getName(),
                        kid.getBan().getName(),
                        kid.getPicture())
                    );
                    return;
                }
        }
    }

    // 일자별 메뉴 생성하기
    @Transactional
    public void createMenuByDay(Long kindergartenId, MenuCreateDto menuCreateDto) {

        Kindergarten kindergarten = kindergartenRepository.findById(kindergartenId)
                .orElseThrow(()-> new RuntimeException(("Kindergarten not found")));


        Menu menu = toEntityMenu(kindergarten,menuCreateDto);

        menuRepository.save(menu);
    }

    @Transactional
    public MenuByDayResponseDto updateMenu(Long menuId, MenuCreateDto menuCreateDto) {

        Menu menu = menuRepository.findById(menuId).orElseThrow(() -> new RuntimeException("해당 메뉴가 없습니다"));

        updateEntityMenu(menu,menuCreateDto);

        menuRepository.save(menu);

        return new MenuByDayResponseDto(
                menuId,
                menu.getLunch(),
                menu.getLunchAllergies(),
                menu.getSnack(),
                menu.getSnackAllergies(),
                menu.getDinner(),
                menu.getDinnerAllergies()
        );
    }


    @Transactional
    public void removeMenu(Long menuId){
        Menu menu = menuRepository.findById(menuId)
                .orElseThrow(() -> new RuntimeException("해당 메뉴가 없습니다."));

        menu.setDeleted(true);
    }


}
