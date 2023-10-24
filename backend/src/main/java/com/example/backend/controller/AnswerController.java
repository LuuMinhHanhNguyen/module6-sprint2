package com.example.backend.controller;

import com.example.backend.service.IAnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@CrossOrigin
@RequestMapping("/answers")
public class AnswerController {
    @Autowired
    private IAnswerService iAnswerService;


//        @GetMapping("/all")
//        public ResponseEntity getAllQuestion(@RequestParam("courseId") Long courseId){
//            return new ResponseEntity(iAnswerService.findAllByCourse_Id(courseId), HttpStatus.OK);
//        }

    @PostMapping("/add")
    public ResponseEntity saveReview(@RequestParam("appUserId") Long appUserId,
                                     @RequestParam("questionId") Long questionId,
                                     @RequestParam("answerText") String answerText
    ){
        iAnswerService.saveReply(appUserId,questionId,answerText);
        return new ResponseEntity<>( HttpStatus.OK);
    }


}
