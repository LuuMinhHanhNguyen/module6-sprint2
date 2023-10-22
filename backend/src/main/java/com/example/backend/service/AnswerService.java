package com.example.backend.service;

import com.example.backend.repository.IAnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class AnswerService implements IAnswerService{
    @Autowired
    private IAnswerRepository iAnswerRepository;
    @Override
    public int saveReply(Long appUserId, Long questionId, String answerText) {
        // get current date time
        LocalDateTime currentDateTime = LocalDateTime.now();

        // format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        String formattedDateTime = currentDateTime.format(formatter);
        return iAnswerRepository.saveReply(appUserId,questionId,answerText,formattedDateTime);

    }

}
