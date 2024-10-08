package yeomeong.common.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import yeomeong.common.dto.menu.request.MenuByDayRequestDto;
import yeomeong.common.dto.menu.request.MenuCreateDto;
import yeomeong.common.dto.menu.response.MenuByDayResponseDto;
import yeomeong.common.service.MenuService;

import java.time.LocalDate;

@RestController
@RequestMapping("/menus")
@RequiredArgsConstructor
@Tag(name = "식단 API", description = "식단 관련 API")
public class MenuController {


    private final MenuService menuService;

    //일자에 해당 유치원 식단 가져오기
    @GetMapping("/{kindergartenId}/{year}/{month}/{day}")
    @Operation(summary = "해당 일자에 유치원 식단을 가져옵니다.", description = "유치원 id, 연,월,일을 통해 해당 일단의 식단을 불러옵니다.")
    public ResponseEntity<MenuByDayResponseDto> getMenu(
            @PathVariable("kindergartenId")Long kindergartenId,
            @PathVariable("year") int year,
            @PathVariable("month") int month,
            @PathVariable("day") int day){

        MenuByDayRequestDto requestDto = new MenuByDayRequestDto(kindergartenId, LocalDate.of(year,month,day));
        MenuByDayResponseDto menu = menuService.getMenuByDay(requestDto);

        return ResponseEntity.ok(menu);
    }

    // 해당 일자에 유치원 식단 생성하기
    @PostMapping("/{kindergartenId}")
    @Operation(summary = "식단을 생성합니다", description = "해당 유치원 id를 통해 식단을 생성합니다.")
    public ResponseEntity<Void> createMenu(
            @PathVariable("kindergartenId") Long kindergartenId,
            @RequestBody MenuCreateDto menuCreateDto){

        menuService.createMenuByDay(kindergartenId, menuCreateDto);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    //해당 일자 식단 수정하기
    @PutMapping("/{menuId}")
    @Operation(summary = "해당 식단을 수정합니다.", description = "해당 식단 id를 통해 식단을 수정합니다.")
    public ResponseEntity<MenuByDayResponseDto> updateMenu(
            @PathVariable("menuId") Long menuId,
            @RequestBody MenuCreateDto menuCreatedDto){

        return ResponseEntity.ok(
                menuService.updateMenu(menuId, menuCreatedDto )
        );
    }

    @DeleteMapping("/{menuId}")
    @Operation(summary = "해당 식단을 삭제합니다.", description = "menu id로 접근하여 해당 메뉴를 삭제합니다.")
    public ResponseEntity<Void> deleteMenu(
            @PathVariable("menuId") Long menuId
    ){
        menuService.removeMenu(menuId);

        return ResponseEntity.ok().build();
    }

}
