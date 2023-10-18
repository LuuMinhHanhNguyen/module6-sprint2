package com.example.backend.service;

import com.example.backend.model.Comment;
import com.example.backend.projection.RatingProjection;

import java.util.List;

public interface ICommentService {

    int saveComment(Long appUserId, Long courseId,
                    String commentText, int rating);

    List<Comment> findAllByCourse_Id(Long courseId);
    boolean existsCommentByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);

    RatingProjection getAvgRatingByCourseId(Long courseId);
}
