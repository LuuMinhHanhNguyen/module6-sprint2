package com.example.backend.repository;


import com.example.backend.model.AnswerLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IAnswerLikeRepository extends JpaRepository<AnswerLike, Long> {
    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = " insert into answer_like(app_user_id, answer_id) " +
            "values (:appUserId, :answerId) ")
    int save(@Param("appUserId") Long appUserId, @Param("answerId") Long answerId);


    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = " delete from answer_like where app_user_id = :appUserId and " +
            " answer_id = :answerId ")
    int delete(@Param("appUserId") Long appUserId, @Param("answerId") Long answerId);



    AnswerLike findByAppUser_IdAndAnswer_Id(@Param("appUserId") Long appUserId, @Param("answerId") Long answerId);



    @Query(nativeQuery = true, value = " select * from answer_like " +
            "join answers ON answer_like.answer_id = answers.id " +
            "join questions ON answers.question_id = questions.id " +
            "join courses ON questions.course_id = courses.id " +
            "where answer_like.app_user_id = :appUserId and courses.id = :courseId ")
    List<AnswerLike> getAllByAppUserIdAndCourseId(@Param("appUserId") Long appUserId,
                                                    @Param("courseId") Long courseId);


    @Query(nativeQuery = true, value = "  SELECT COUNT(*) FROM answer_like " +
            "    WHERE answer_id = :answerId ")
    Long getAnswerLikeCount(@Param("answerId") Long answerId);
}
