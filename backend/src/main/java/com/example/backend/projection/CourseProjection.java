package com.example.backend.projection;

import com.example.backend.model.Course;

public interface CourseProjection {

     Long getCourseId();
     double getAverageRating();
     int getNumOfRating();
     Integer getNumOfStudent();
     Integer getNumOfVideo();
}
