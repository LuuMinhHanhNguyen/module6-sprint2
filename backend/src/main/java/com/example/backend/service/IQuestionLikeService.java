package com.example.backend.service;


import com.example.backend.model.QuestionLike;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IQuestionLikeService {
    int save( Long appUserId,  Long questionId);

    int delete(Long appUserId,  Long questionId);

    QuestionLike findByAppUser_IdAndQuestion_Id( Long appUserId, Long questionId);

    List<QuestionLike> getAllByAppUserIdAndCourseId(Long appUserId,
                                                    Long courseId);
}
