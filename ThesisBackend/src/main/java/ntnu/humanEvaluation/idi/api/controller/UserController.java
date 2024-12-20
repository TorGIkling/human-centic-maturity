package ntnu.humanEvaluation.idi.api.controller;
import ntnu.humanEvaluation.idi.api.dto.UserRequestDto;
import ntnu.humanEvaluation.idi.persistance.entity.User;
import ntnu.humanEvaluation.idi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

}
