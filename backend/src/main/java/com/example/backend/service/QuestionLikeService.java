package com.example.backend.service;

import com.example.backend.model.QuestionLike;
import com.example.backend.repository.IQuestionLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionLikeService implements IQuestionLikeService{

    @Autowired
    private IQuestionLikeRepository iQuestionLikeRepository;



    @Override
    public int save(Long appUserId, Long questionId) {
        return iQuestionLikeRepository.save(appUserId,questionId);
    }

    @Override
    public int delete(Long appUserId, Long questionId) {
        return iQuestionLikeRepository.delete(appUserId, questionId);
    }

    @Override
    public QuestionLike findByAppUser_IdAndQuestion_Id(Long appUserId, Long questionId) {
        return iQuestionLikeRepository.findByAppUser_IdAndQuestion_Id(appUserId,questionId);
    }

    @Override
    public List<QuestionLike> getAllByAppUserIdAndCourseId(Long appUserId, Long courseId) {
        return iQuestionLikeRepository.getAllByAppUserIdAndCourseId(appUserId, courseId);
    }
}
