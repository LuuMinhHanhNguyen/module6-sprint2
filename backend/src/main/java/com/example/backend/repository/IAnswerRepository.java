package com.example.backend.repository;

import com.example.backend.model.Answer;
import com.example.backend.projection.AnswerProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IAnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findAllByQuestion_Id(@Param("questionId")Long questionId);

    @Query(nativeQuery = true, value = " SELECT answers.* , " +
            "COUNT(answer_like.id) AS likes " +
            "FROM answers " +
            "LEFT JOIN answer_like ON answer_like.answer_id = answers.id " +
            "WHERE answers.question_id = :questionId " +
            "GROUP BY answers.id " +
            "ORDER BY answers.id ASC ")
    List<AnswerProjection> getAllByQuestion_Id(@Param("questionId")Long questionId);


    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = " insert into answers(app_user_id, question_id, answer_text, answer_date) " +
            "values (:appUserId, :questionId, :answerText, :answerDate ) ")
    int saveReply(@Param("appUserId") Long appUserId, @Param("questionId") Long questionId,
                     @Param("answerText") String answerText,
                     @Param("answerDate") String answerDate);
}
