package com.example.portfolio_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.portfolio_api.model.Technology;
import com.example.portfolio_api.service.TechnologyService;

@RestController
@RequestMapping("/api/technologies")
public class TechnologyController {

    @Autowired
    private TechnologyService technologyService;

    @GetMapping
    public List<Technology> getAllTechnologies() {
        return technologyService.getAllTechnologies();
    }
}