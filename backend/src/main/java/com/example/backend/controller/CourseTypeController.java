package com.example.backend.controller;

import com.example.backend.service.ICourseTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/courseTypes")
public class CourseTypeController {
    @Autowired
    private ICourseTypeService iCourseTypeService;
    @GetMapping("")
    public ResponseEntity getAllCourseType(){
        return new ResponseEntity(iCourseTypeService.getAllCourseType(), HttpStatus.OK);
    }
}
