package com.example.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "answers")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "answerText")
    private String answerText;
    @Column(name = "answerDate")
    private String answerDate;

    @ManyToOne
    private Question question;

    @ManyToOne
    private AppUser appUser;

    public Answer() {
    }

    public Answer(Long id, String answerText, String answerDate, Question question, AppUser appUser) {
        this.id = id;
        this.answerText = answerText;
        this.answerDate = answerDate;
        this.question = question;
        this.appUser = appUser;
    }

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }

    public String getAnswerDate() {
        return answerDate;
    }

    public void setAnswerDate(String answerDate) {
        this.answerDate = answerDate;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
