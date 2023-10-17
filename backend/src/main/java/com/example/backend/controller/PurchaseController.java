package com.example.backend.controller;

import com.example.backend.service.IPurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/purchases")
public class PurchaseController {

    @Autowired
    private IPurchaseService iPurchaseService;

    @PostMapping("")
    public ResponseEntity createPurchase(@RequestParam("appUserId") Long appUserId){
        return new ResponseEntity<>(iPurchaseService.createPurchases(appUserId), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity getPurchases(@RequestParam("appUserId") Long appUserId){
        return new ResponseEntity<>(iPurchaseService.getPurchases(appUserId), HttpStatus.OK);
    }


}
