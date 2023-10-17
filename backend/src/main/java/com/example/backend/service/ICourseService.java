package com.example.backend.service;

import com.example.backend.model.Course;

import java.util.List;

public interface ICourseService {
    List<Course> getAllCourse();

    Course findCourse(Long id);
}
