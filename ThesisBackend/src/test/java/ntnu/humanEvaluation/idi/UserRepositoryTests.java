package ntnu.humanEvaluation.idi;

import static org.junit.jupiter.api.Assertions.*;

import ntnu.humanEvaluation.idi.persistance.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserRepositoryTests {

    @Autowired
    private UserRepository userRepository;

    @Test
    void repositoryShouldBeLoaded() {
        assertNotNull(userRepository); // Fails if the repository bean is not loaded
    }
}