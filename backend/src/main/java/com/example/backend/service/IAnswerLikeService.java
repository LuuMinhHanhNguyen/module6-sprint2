package com.example.backend.service;

import com.example.backend.model.AnswerLike;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IAnswerLikeService {

    int save(Long appUserId, Long answerId);


    int delete(Long appUserId, Long answerId);


    AnswerLike findByAppUser_IdAndAnswer_Id(Long appUserId,
                                           Long answerId);


    List<AnswerLike> getAllByAppUserIdAndCourseId(Long appUserId,
                                                  Long courseId);


    Long getAnswerLikeCount(Long answerId);
}
