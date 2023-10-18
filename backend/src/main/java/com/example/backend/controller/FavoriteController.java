package com.example.backend.controller;

import com.example.backend.model.Favorites;
import com.example.backend.service.IFavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/favorites")
public class FavoriteController {

    @Autowired
    private IFavoriteService iFavoriteService;

    @GetMapping("")
    public ResponseEntity getAllFavorites(@RequestParam("appUserId") Long appUserId){

        return new ResponseEntity<>(iFavoriteService.findByAppUserId(appUserId), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity addToFavorites(@RequestParam("appUserId") Long appUserId,
                                    @RequestParam("courseId") Long courseId){

        Favorites tempFavorite = iFavoriteService.checkFavorite(appUserId,courseId);

        if(tempFavorite == null){
            iFavoriteService.addToFavorites(appUserId, courseId);
        } else {
            iFavoriteService.deleteFavorite(tempFavorite.getId());
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/check-favorite")
    public ResponseEntity getAllFavorites(@RequestParam("appUserId") Long appUserId,
                                          @RequestParam("courseId") Long courseId){
        return new ResponseEntity<>(iFavoriteService.checkFavorite(appUserId,courseId), HttpStatus.OK);
    }



}
