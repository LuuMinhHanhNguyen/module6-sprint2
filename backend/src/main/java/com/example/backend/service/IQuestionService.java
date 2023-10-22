package com.example.backend.service;

import com.example.backend.model.Question;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IQuestionService {

    List<Question> findAllByCourse_Id(Long courseId);

    int saveQuestion(Long appUserId, Long courseId,
                    String questionText);
}
