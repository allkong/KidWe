package yeomeong.common.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.time.LocalDate;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import yeomeong.common.dto.attendance.AttendanceInfoChangeRequestDto;
import yeomeong.common.dto.attendance.AttendanceReasonChangeRequestDto;
import yeomeong.common.dto.attendance.AttendanceResponseDto;
import yeomeong.common.service.AttendanceService;

@RestController
@RequestMapping("/attendances")
@Tag(name = "출석 API", description = "출석 관련 API")
public class AttendanceController {

    final AttendanceService attendanceService;

    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @Operation(summary = "출석 정보 조회", description = "특정 반의 특정 날짜에 대한 출석 정보를 조회합니다.")
    @GetMapping("/{banId}/{year}/{month}/{day}")
    public ResponseEntity<List<AttendanceResponseDto>> getAttendancesByBanId(
        @PathVariable Long banId, @PathVariable Integer year, @PathVariable Integer month, @PathVariable Integer day) {
        return ResponseEntity.status(HttpStatus.OK).body(attendanceService.getAttendancesByBanId(banId, LocalDate.of(year, month, day)));
    }

    @Operation(summary = "출석 정보 변경",
        description = "특정 아이들의 특정 날짜에 대한 출석 정보를 변경합니다. (attendedToday - 미처리: NOTHING, 출석: ATTENDANCE, 결석: ABSENCE)")
    @PutMapping
    public ResponseEntity<List<AttendanceResponseDto>> updateAttendances(@RequestBody AttendanceInfoChangeRequestDto changeRequestDto) {
        attendanceService.updateAttendances(changeRequestDto);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @Operation(summary = "출결 내용 작성", description = "특정 아이의 특정 날짜에 대한 출결 내용 작성 내용을 저장합니다.")
    @PutMapping("/reason")
    public ResponseEntity<List<AttendanceResponseDto>> updateAttendanceReason(@RequestBody AttendanceReasonChangeRequestDto changeRequestDto) {
        attendanceService.updateAttendanceReason(changeRequestDto);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
