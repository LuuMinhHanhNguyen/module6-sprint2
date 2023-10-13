package com.example.backend.controller;

import com.example.backend.service.ICourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private ICourseService iCourseService;

    @GetMapping("")
    public ResponseEntity getAll(){
        return new ResponseEntity<>(iCourseService.getAllCourse(), HttpStatus.OK);
    }
}
