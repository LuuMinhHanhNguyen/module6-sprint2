package com.example.backend.controller;

import com.example.backend.model.Course;
import com.example.backend.service.ICourseService;
import com.example.backend.service.IPurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@CrossOrigin
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private ICourseService iCourseService;

    @Autowired
    private IPurchaseService iPurchaseService;

    @GetMapping("")
    public ResponseEntity getAll(){


        return new ResponseEntity<>(iCourseService.getAllCourse(), HttpStatus.OK);
    }

    @GetMapping("/details")
    public ResponseEntity getCourse(@RequestParam("courseId") Long courseId){
        Map<String, Object> results = new HashMap<>();

        Course course = iCourseService.findCourse(courseId);
        Integer numOfStudent = iPurchaseService.getNumOfPurchaseByCourseId(courseId);

        results.put("course", course);
        results.put("numOfStudent", numOfStudent);

        return new ResponseEntity<>(results, HttpStatus.OK);
    }

}
