package com.example.backend.service;

import com.example.backend.model.Question;
import com.example.backend.projection.QuestionDTO;


import java.util.List;

public interface IQuestionService {

    List<QuestionDTO> findAllByCourse_Id(Long courseId, String sortBy);

    int saveQuestion(Long appUserId, Long courseId,
                    String questionText);
}
