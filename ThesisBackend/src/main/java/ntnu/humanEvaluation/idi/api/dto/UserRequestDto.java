package ntnu.humanEvaluation.idi.api.dto;

import lombok.Builder;

@Builder
public class UserRequestDto {
    private String username;
    private String email;
    private boolean isEvaluator;
}
