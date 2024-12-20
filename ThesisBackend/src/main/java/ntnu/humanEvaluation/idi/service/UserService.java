package ntnu.humanEvaluation.idi.service;

import ntnu.humanEvaluation.idi.persistance.entity.User;
import ntnu.humanEvaluation.idi.persistance.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElse(new User());
    }
}
