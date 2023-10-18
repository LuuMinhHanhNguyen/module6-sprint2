package com.example.backend.service;

import com.example.backend.model.Course;
import com.example.backend.projection.CourseDTO;


import java.util.List;

public interface ICourseService {
    List<CourseDTO> getAllCourse();

    Course findCourse(Long id);
}
