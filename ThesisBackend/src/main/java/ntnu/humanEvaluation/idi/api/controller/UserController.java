package ntnu.humanEvaluation.idi.api.controller;
import ntnu.humanEvaluation.idi.api.dto.UserRequestDto;
import ntnu.humanEvaluation.idi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserRequestDto> getUserById(@PathVariable Long id) {
        UserRequestDto userRequestDto = userService.getUserDtoById(id);
        return ResponseEntity.ok(userRequestDto);
    }
}
