package ntnu.humanEvaluation.idi.persistance.repository;

import ntnu.humanEvaluation.idi.persistance.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
