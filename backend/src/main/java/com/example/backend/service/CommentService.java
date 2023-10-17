package com.example.backend.service;

import com.example.backend.model.Comment;
import com.example.backend.repository.ICommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class CommentService implements ICommentService{
    @Autowired
    private ICommentRepository iCommentRepository;
    @Override
    public int saveComment(Long appUserId, Long courseId, String commentText) {
        // get current date time
        LocalDateTime currentDateTime = LocalDateTime.now();

        // format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        String formattedDateTime = currentDateTime.format(formatter);
        return iCommentRepository.saveComment(appUserId,courseId,commentText,formattedDateTime);
    }

    @Override
    public List<Comment> findAllByCourse_Id(Long courseId) {
        return iCommentRepository.findAllByCourse_Id(courseId);
    }

    @Override
    public boolean existsCommentByAppUser_IdAndCourse_Id(Long appUserId, Long courseId) {
        return iCommentRepository.existsCommentByAppUser_IdAndCourse_Id(appUserId,courseId);
    }


}
