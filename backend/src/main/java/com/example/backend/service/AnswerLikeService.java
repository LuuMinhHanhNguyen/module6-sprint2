package com.example.backend.service;

import com.example.backend.model.AnswerLike;
import com.example.backend.repository.IAnswerLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerLikeService implements IAnswerLikeService{

    @Autowired
    private IAnswerLikeRepository iAnswerLikeRepository;

    @Override
    public int save(Long appUserId, Long answerId) {
        return iAnswerLikeRepository.save(appUserId,answerId);
    }

    @Override
    public int delete(Long appUserId, Long answerId) {
        return iAnswerLikeRepository.delete(appUserId,answerId);
    }

    @Override
    public AnswerLike findByAppUser_IdAndAnswer_Id(Long appUserId, Long answerId) {
        return iAnswerLikeRepository.findByAppUser_IdAndAnswer_Id(appUserId,answerId);
    }

    @Override
    public List<AnswerLike> getAllByAppUserIdAndCourseId(Long appUserId, Long courseId) {
        return iAnswerLikeRepository.getAllByAppUserIdAndCourseId(appUserId,courseId);
    }

    @Override
    public Long getAnswerLikeCount(Long answerId) {
        return iAnswerLikeRepository.getAnswerLikeCount(answerId);
    }
}
