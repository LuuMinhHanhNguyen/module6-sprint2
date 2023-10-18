package com.example.backend.controller;

import com.example.backend.projection.RatingDTO;
import com.example.backend.projection.RatingProjection;
import com.example.backend.service.ICommentService;
import com.example.backend.service.IPurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

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
        Map<String,Object> map = new HashMap<>();
        RatingProjection temp = iCommentService.getAvgRatingByCourseId(courseId);
        map.put("comments", iCommentService.findAllByCourse_Id(courseId));
        map.put("rating", new RatingDTO(temp.getNumOfRating() > 0 ? temp.getAverageRating() : 0, temp.getNumOfRating()));
        System.out.println(map);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }


    @PostMapping("/review")
    public ResponseEntity saveReview(@RequestParam("appUserId") Long appUserId,
                                     @RequestParam("courseId") Long courseId,
                                     @RequestParam("commentText") String commentText,
                                     @RequestParam("rating") int rating
    ){
        if(iPurchaseService.existsPurchaseByAppUser_IdAndCourse_Id(appUserId, courseId)
                && !iCommentService.existsCommentByAppUser_IdAndCourse_Id(appUserId,courseId)){
            iCommentService.saveComment(appUserId,courseId,commentText,rating);
            return new ResponseEntity<>( HttpStatus.OK);
        }

        if(iCommentService.existsCommentByAppUser_IdAndCourse_Id(appUserId,courseId)) {
            return new ResponseEntity<>(HttpStatus.METHOD_NOT_ALLOWED);
        }
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);

    }



}
