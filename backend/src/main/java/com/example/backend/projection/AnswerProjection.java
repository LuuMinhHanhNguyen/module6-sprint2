package com.example.backend.projection;

import com.example.backend.model.Answer;

public interface AnswerProjection {
    Long getId();
    String getAnswer_date();
    String getAnswer_text();
    Long getApp_user_id();
    Long getQuestion_id();
    Long getLikes();
}
