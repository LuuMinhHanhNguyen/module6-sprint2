package com.example.backend.service;


import com.example.backend.model.Course;
import com.example.backend.projection.CourseDTO;
import com.example.backend.projection.CourseProjection;
import com.example.backend.repository.ICourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService implements ICourseService{
    @Autowired
    private ICourseRepository iCourseRepository;
    @Override
    public List<CourseDTO> getAllCourse() {

        List<CourseDTO> results = new ArrayList<>();

        List<CourseProjection> projections = iCourseRepository.findCoursesWithRatingsAndStudents();
        List<Course> courses = iCourseRepository.findAll();

        for (int i = 0; i < courses.size(); i++) {
           results.add(new CourseDTO(courses.get(i), projections.get(i).getAverageRating(),
                   projections.get(i).getNumOfRating(),projections.get(i).getNumOfStudent(),
                   projections.get(i).getCourseId(), projections.get(i).getNumOfVideo()));
        }

        return results;
    }

    @Override
    public Course findCourse(Long id) {
        return iCourseRepository.findById(id).get();
    }
}
