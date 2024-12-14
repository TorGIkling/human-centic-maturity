package ntnu.humanEvaluation.idi.service;

import ntnu.humanEvaluation.idi.api.dto.UserRequestDto;
import ntnu.humanEvaluation.idi.persistance.entity.User;
import ntnu.humanEvaluation.idi.persistance.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService (UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserRequestDto getUserDtoById(Long userId) {
        User userEntity = userRepository.findFirstByUserId(userId);

        return UserRequestDto.builder()
                .username(userEntity.getUsername())
                .email(userEntity.getEmail())
                .isEvaluator(userEntity.isEvaluator())
                .build();

    }
}
