package com.example.backend.service;

import com.example.backend.model.Question;
import com.example.backend.repository.IQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class QuestionService implements IQuestionService{
    @Autowired
    private IQuestionRepository iQuestionRepository;

    @Override
    public List<Question> findAllByCourse_Id(Long courseId) {
        return iQuestionRepository.findAllByCourse_Id(courseId);
    }

    @Override
    public int saveQuestion(Long appUserId, Long courseId, String commentText) {
        // get current date time
        LocalDateTime currentDateTime = LocalDateTime.now();

        // format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        String formattedDateTime = currentDateTime.format(formatter);
        return iQuestionRepository.saveQuestion(appUserId,courseId,commentText,formattedDateTime);
    }
}
