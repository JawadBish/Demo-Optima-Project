package com.helloworld.jawad.controllers;


import com.helloworld.jawad.models.CustomerAccount;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin( origins = "*")
@RestController
@RequestMapping("/")
public class HelloController {

    @GetMapping
    public String getWelcome() {
        return "Welcome to MySaaS Project!";
    }
}
