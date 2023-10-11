package com.example.backend.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
@RequestMapping("/check")
public class CheckController {

    @PreAuthorize("has_role")
    @GetMapping("")
    public String sayHello(){
        return "hello dudes!!!";
    }
}
