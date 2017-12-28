package com.example.basemongo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

    @Autowired
    MongoOperations mongoOperations;

    @RequestMapping(path = "/" , method = RequestMethod.GET)
    public String welcome(){
        return "home";
    }


}
