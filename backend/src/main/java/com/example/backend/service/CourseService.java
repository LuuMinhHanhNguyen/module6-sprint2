package com.example.backend.service;


import com.example.backend.model.Course;
import com.example.backend.repository.ICourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService implements ICourseService{
    @Autowired
    private ICourseRepository iCourseRepository;
    @Override
    public List<Course> getAllCourse() {
        return iCourseRepository.findAll();
    }

    @Override
    public Course findCourse(Long id) {
        return iCourseRepository.findById(id).get();
    }
}
