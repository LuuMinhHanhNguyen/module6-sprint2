package com.example.backend.controller;

import com.example.backend.service.ICommentService;
import com.example.backend.service.IPurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    private ICommentService iCommentService;

    @Autowired
    private IPurchaseService iPurchaseService;

    @GetMapping("/all")
    public ResponseEntity getAllComments(@RequestParam("courseId") Long courseId){
        return new ResponseEntity<>(iCommentService.findAllByCourse_Id(courseId), HttpStatus.OK);
    }


    @PostMapping("/review")
    public ResponseEntity saveReview(@RequestParam("appUserId") Long appUserId,
                                     @RequestParam("courseId") Long courseId,
                                     @RequestParam("commentText") String commentText
    ){
        if(iPurchaseService.existsPurchaseByAppUser_IdAndCourse_Id(appUserId, courseId)
                && !iCommentService.existsCommentByAppUser_IdAndCourse_Id(appUserId,courseId)){
            iCommentService.saveComment(appUserId,courseId,commentText);
            return new ResponseEntity<>( HttpStatus.OK);
        }

        if(iCommentService.existsCommentByAppUser_IdAndCourse_Id(appUserId,courseId)) {
            return new ResponseEntity<>(HttpStatus.METHOD_NOT_ALLOWED);
        }
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);

    }

}
