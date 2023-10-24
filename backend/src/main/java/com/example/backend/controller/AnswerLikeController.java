package com.example.backend.controller;

import com.example.backend.service.IAnswerLikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/answer-likes")
public class AnswerLikeController {
    @Autowired
    IAnswerLikeService iAnswerLikeService;

    @PostMapping("/add")
    ResponseEntity<?> saveAnswerLike(@RequestParam("appUserId") Long appUserId,
                                       @RequestParam("answerId") Long answerId) {

        if (iAnswerLikeService.findByAppUser_IdAndAnswer_Id(appUserId, answerId) == null) {
            return new ResponseEntity<>(iAnswerLikeService.save(appUserId, answerId), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(iAnswerLikeService.delete(appUserId, answerId), HttpStatus.OK);
        }
    }

    @GetMapping("/all")
    ResponseEntity<?> getAnswerLikes(@RequestParam("appUserId") Long appUserId,
                                       @RequestParam("courseId") Long courseId) {

        return new ResponseEntity<>(iAnswerLikeService.getAllByAppUserIdAndCourseId(appUserId, courseId),
                HttpStatus.OK);

    }

}
