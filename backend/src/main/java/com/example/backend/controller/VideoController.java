package com.example.backend.controller;


import com.example.backend.service.IVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@CrossOrigin
@RequestMapping("/videos")
public class VideoController {

    @Autowired
    private IVideoService iVideoService;

    @GetMapping("")
    public ResponseEntity getAllVideos(@RequestParam("courseId") Long courseId ){
        return new ResponseEntity<>(iVideoService.getAllVideos(courseId),HttpStatus.OK);
    }
}
