package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Sample02Controller {

    @GetMapping("/register")
    public String registerController() {

        return "register";
    }
}
