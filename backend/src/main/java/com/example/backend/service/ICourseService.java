package com.example.backend.service;

import com.example.backend.model.Course;
import com.example.backend.projection.CourseDTO;
import com.example.backend.projection.CourseProjection;
import org.springframework.data.repository.query.Param;


import java.util.List;

public interface ICourseService {
    List<CourseDTO> getAllCourse();

    Course findCourse(Long id);

    List<CourseDTO> searchCourses(String searchInfo);

    List<CourseDTO> searchAllCourses(String searchInfo,  int numOfStar,
                                   String topics,
                                  double priceStart, double priceEnd,String sortBy);
}
