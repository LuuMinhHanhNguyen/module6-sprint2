package com.example.backend.service;

import com.example.backend.model.Comment;
import java.util.List;

public interface ICommentService {

    int saveComment(Long appUserId, Long courseId,
                    String commentText);

    List<Comment> findAllByCourse_Id(Long courseId);
    boolean existsCommentByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);
}
