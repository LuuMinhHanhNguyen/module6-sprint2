package com.example.backend.projection;

import com.example.backend.model.Question;

import java.util.List;

public class QuestionDTO {

    private Question question;
    private List<AnswerDTO> answers;

    private Long likes;


    public QuestionDTO(Question question, List<AnswerDTO> answers, Long likes) {
        this.question = question;
        this.answers = answers;
        this.likes = likes;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public List<AnswerDTO> getAnswers() {
        return answers;
    }

    public void setAnswers(List<AnswerDTO> answers) {
        this.answers = answers;
    }

    public Long getLikes() {
        return likes;
    }

    public void setLikes(Long likes) {
        this.likes = likes;
    }
}
