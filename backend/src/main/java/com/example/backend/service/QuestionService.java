package com.example.backend.service;

import com.example.backend.model.Answer;
import com.example.backend.model.Question;
import com.example.backend.projection.AnswerDTO;
import com.example.backend.projection.AnswerProjection;
import com.example.backend.projection.QuestionDTO;
import com.example.backend.repository.IAnswerRepository;
import com.example.backend.repository.IAppUserRepository;
import com.example.backend.repository.IQuestionLikeRepository;
import com.example.backend.repository.IQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService implements IQuestionService {
    @Autowired
    private IQuestionRepository iQuestionRepository;
    @Autowired
    private IAnswerRepository iAnswerRepository;
    @Autowired
    private IAppUserRepository iAppUserRepository;

    @Autowired
    private IQuestionLikeRepository iQuestionLikeRepository;

    @Override
    public List<QuestionDTO> findAllByCourse_Id(Long courseId, String sortBy) {
        List<QuestionDTO> results = new ArrayList<>();


        List<Question> questions = iQuestionRepository.findAllByCourse_Id(courseId, sortBy);

        for (int i = 0; i < questions.size(); i++) {

            List<AnswerProjection> answerProjections = iAnswerRepository.
                    getAllByQuestion_Id(questions.get(i).getId());

            List<AnswerDTO> answerDTOS = new ArrayList<>();

            answerProjections.forEach(el -> answerDTOS.add(
                    new AnswerDTO(
                            new Answer(el.getId(), el.getAnswer_text(), el.getAnswer_date(),
                                    iQuestionRepository.findById(el.getQuestion_id()).get(),
                                    iAppUserRepository.findById(el.getApp_user_id()).get()
                                    ),
                            el.getLikes()
                    )));

            results.add(
                    new QuestionDTO(questions.get(i),
                            answerDTOS,
                            iQuestionLikeRepository.getQuestionLikeCount(questions.get(i).getId())
                    ));
        }

        return results;
    }

    @Override
    public int saveQuestion(Long appUserId, Long courseId, String commentText) {
        // get current date time
        LocalDateTime currentDateTime = LocalDateTime.now();

        // format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        String formattedDateTime = currentDateTime.format(formatter);
        return iQuestionRepository.saveQuestion(appUserId, courseId, commentText, formattedDateTime);
    }
}
