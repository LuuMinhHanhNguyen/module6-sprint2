package com.example.backend.repository;

import com.example.backend.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface IAnswerRepository extends JpaRepository<Answer, Long> {


    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = " insert into answers(app_user_id, question_id, answer_text, answer_date) " +
            "values (:appUserId, :questionId, :answerText, :answerDate ) ")
    int saveReply(@Param("appUserId") Long appUserId, @Param("questionId") Long questionId,
                     @Param("answerText") String answerText,
                     @Param("answerDate") String answerDate);
}
