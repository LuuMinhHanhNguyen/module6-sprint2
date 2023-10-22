package com.example.backend.service;

import org.springframework.data.repository.query.Param;

public interface IAnswerService {
    int saveReply(Long appUserId,  Long questionId, String answerText);
}
