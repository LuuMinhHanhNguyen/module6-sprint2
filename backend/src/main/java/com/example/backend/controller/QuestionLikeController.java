package com.example.backend.controller;

import com.example.backend.service.IQuestionLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/question-likes")
public class QuestionLikeController {

    @Autowired
    IQuestionLikeService iQuestionLikeService;

    @PostMapping("/add")
    ResponseEntity<?> saveQuestionLike(@RequestParam("appUserId") Long appUserId,
                                       @RequestParam("questionId") Long questionId) {

        if (iQuestionLikeService.findByAppUser_IdAndQuestion_Id(appUserId, questionId) == null) {
            return new ResponseEntity<>(iQuestionLikeService.save(appUserId, questionId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(iQuestionLikeService.delete(appUserId, questionId), HttpStatus.OK);
        }
    }

    @GetMapping("/all")
    ResponseEntity<?> getQuestionLikes(@RequestParam("appUserId") Long appUserId,
                                       @RequestParam("courseId") Long courseId) {

        return new ResponseEntity<>(iQuestionLikeService.getAllByAppUserIdAndCourseId(appUserId, courseId),
                HttpStatus.OK);

    }

}
