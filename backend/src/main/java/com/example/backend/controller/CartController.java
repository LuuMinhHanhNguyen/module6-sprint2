package com.example.backend.controller;

import com.example.backend.model.Cart;
import com.example.backend.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/carts")
public class CartController {

    @Autowired
    private ICartService iCartService;

    @GetMapping("")
    public ResponseEntity getAllCarts(@RequestParam("appUserId") Long appUserId){
        return new ResponseEntity<>(iCartService.findAllByAppUserId(appUserId), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity addToCart(@RequestParam("appUserId") Long appUserId,
                                      @RequestParam("courseId") Long courseId){

        if(iCartService.checkCart(appUserId,courseId) == null){
            iCartService.addToCart(appUserId, courseId);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("")
    public ResponseEntity deleteCart(@RequestParam("cartId") Long cartId){
        iCartService.deleteCart(cartId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
