package com.example.backend.service;

import com.example.backend.model.CourseType;
import com.example.backend.repository.ICourseTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseTypeService implements ICourseTypeService{

    @Autowired
    private ICourseTypeRepository iCourseTypeRepository;
    @Override
    public List<CourseType> getAllCourseType() {
        return iCourseTypeRepository.findAll();
    }
}
