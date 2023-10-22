package com.example.backend.controller;

import com.example.backend.service.IQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private IQuestionService iQuestionService;

    @GetMapping("/all")
    public ResponseEntity getAllQuestion(@RequestParam("courseId") Long courseId){
        return new ResponseEntity(iQuestionService.findAllByCourse_Id(courseId), HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity saveReview(@RequestParam("appUserId") Long appUserId,
                                     @RequestParam("courseId") Long courseId,
                                     @RequestParam("questionText") String questionText
    ){
        iQuestionService.saveQuestion(appUserId,courseId,questionText);
            return new ResponseEntity<>( HttpStatus.OK);
    }

}
