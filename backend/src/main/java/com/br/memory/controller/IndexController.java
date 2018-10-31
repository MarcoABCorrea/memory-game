package com.br.memory.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class IndexController {

	@CrossOrigin
    @GetMapping
    public String sayHello() {
        return "The app is up and running!";
    }
}
