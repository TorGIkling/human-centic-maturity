package ntnu.humanEvaluation.idi.persistance.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class User {
    @Id
    private Long userId;
    private String username;
    private String email;
    private String password;
    private boolean isEvaluator;
}

