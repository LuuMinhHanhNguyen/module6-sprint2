package com.example.backend.repository;

import com.example.backend.model.Course;
import com.example.backend.model.CourseType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICourseTypeRepository extends JpaRepository<CourseType, Long> {

}
