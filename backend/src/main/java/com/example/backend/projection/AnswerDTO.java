package com.example.backend.projection;

import com.example.backend.model.Answer;

public class AnswerDTO {

    private Answer answer;
    private Long likes;

    public AnswerDTO() {
    }

    public AnswerDTO(Answer answer, Long likes) {
        this.answer = answer;
        this.likes = likes;
    }

    public Answer getAnswer() {
        return answer;
    }

    public void setAnswer(Answer answer) {
        this.answer = answer;
    }

    public Long getLikes() {
        return likes;
    }

    public void setLikes(Long likes) {
        this.likes = likes;
    }
}
