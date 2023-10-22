package com.example.backend.repository;

import com.example.backend.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IQuestionRepository extends JpaRepository<Question,Long> {

    List<Question> findAllByCourse_Id(@Param("courseId") Long courseId);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = " insert into questions(app_user_id, course_id, question_text, question_date) " +
            "values (:appUserId, :courseId, :questionText, :questionDate ) ")
    int saveQuestion(@Param("appUserId") Long appUserId, @Param("courseId") Long courseId,
                    @Param("questionText") String commentText,
                    @Param("questionDate") String commentDate);
}
