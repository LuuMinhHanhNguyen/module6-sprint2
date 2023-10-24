package com.example.backend.repository;

import com.example.backend.model.QuestionLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IQuestionLikeRepository extends JpaRepository<QuestionLike, Long> {


    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = " insert into question_like(app_user_id, question_id) " +
            "values (:appUserId, :questionId) ")
    int save(@Param("appUserId") Long appUserId, @Param("questionId") Long questionId);


    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = " delete from question_like where app_user_id = :appUserId and " +
            " question_id = :questionId ")
    int delete(@Param("appUserId") Long appUserId, @Param("questionId") Long questionId);


    QuestionLike findByAppUser_IdAndQuestion_Id(@Param("appUserId") Long appUserId,
                                                @Param("questionId") Long questionId);



    @Query(nativeQuery = true, value = " select * from question_like " +
            "join questions ON question_like.question_id = questions.id " +
            "join courses ON questions.course_id = courses.id " +
            "where question_like.app_user_id = :appUserId AND courses.id = :courseId ")
    List<QuestionLike> getAllByAppUserIdAndCourseId(@Param("appUserId") Long appUserId,
                                                    @Param("courseId") Long courseId);


            @Query(nativeQuery = true, value = "  SELECT COUNT(*) FROM question_like " +
                    "    WHERE question_id = :questionId ")
    Long getQuestionLikeCount(@Param("questionId") Long questionId);
}
