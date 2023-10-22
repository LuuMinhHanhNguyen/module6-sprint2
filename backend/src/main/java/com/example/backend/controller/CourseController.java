package com.example.backend.controller;

import com.example.backend.model.Course;
import com.example.backend.model.CourseType;
import com.example.backend.model.SearchDTO;
import com.example.backend.repository.ICourseRepository;
import com.example.backend.service.ICourseService;
import com.example.backend.service.ICourseTypeService;
import com.example.backend.service.IPurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
@CrossOrigin
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private ICourseService iCourseService;

    @Autowired
    private ICourseTypeService iCourseTypeService;


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

    @GetMapping("/search")
    public ResponseEntity searchCourse(@RequestParam("searchInfo") String searchInfo){

        return new ResponseEntity<>(iCourseService.searchCourses(searchInfo), HttpStatus.OK);
    }

    @PostMapping("/search-all")
    public ResponseEntity searchAllCourses(@RequestBody SearchDTO searchDTO
                                           ){

//        @RequestParam("searchInfo") String searchInfo,
//        @RequestParam("numOfRating") int numOfRating,
//        @RequestParam("topics")  List<String> topics,
//        @RequestParam("priceStart") Double priceStart,
//        @RequestParam("priceEnd") Double priceEnd

        List<CourseType> courseTypes = iCourseTypeService.getAllCourseType();


        String courseTypeIDsInText = String.join(",",
                courseTypes.stream().map((el)->el.getId().toString()).collect(Collectors.toList()));
        System.out.println(courseTypeIDsInText);
        if(searchDTO.getTopics().size() > 0) courseTypeIDsInText = String.join(",", searchDTO.getTopics());

        return new ResponseEntity<>(
                iCourseService.searchAllCourses(searchDTO.getSearchInfo(),
                        searchDTO.getNumOfRating(),courseTypeIDsInText,
                        searchDTO.getPriceStart(), searchDTO.getPriceEnd(),searchDTO.getSortBy()),
                HttpStatus.OK);
    }



}
