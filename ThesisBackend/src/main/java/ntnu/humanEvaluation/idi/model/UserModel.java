package ntnu.humanEvaluation.idi.model;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
public class UserModel {

    private String username;
    private String userId;
    private String email;
    private String password;

}