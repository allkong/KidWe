package yeomeong.common.dto.medication;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class MedicationCreateDto {

    private String medicineName;
    private String symptom;
    private String type;
    private String capacity;
    private String medicationExecuteTime;
    private String numberOfDoses;

    private String storageMethod;
    private String others;

    private LocalDate medicationExecuteDueDate;


}
