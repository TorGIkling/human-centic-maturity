package ntnu.humanEvaluation.idi.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EvaluationModel {

    private int evaluationId;
    private int userId;
    private String evaluationTitle;
    private int evaluationResult;
}
