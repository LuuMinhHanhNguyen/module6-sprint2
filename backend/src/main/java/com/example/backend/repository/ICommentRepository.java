package com.example.backend.repository;

import com.example.backend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ICommentRepository extends JpaRepository<Comment, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "insert into comments(app_user_id, course_id, comment_text, comment_date) " +
            "values (:appUserId, :courseId, :commentText, :commentDate)")
    int saveComment(@Param("appUserId") Long appUserId, @Param("courseId") Long courseId,
                    @Param("commentText") String commentText, @Param("commentDate") String commentDate);

    List<Comment> findAllByCourse_Id(Long courseId);

    boolean existsCommentByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);
}
