package com.example.portfolio_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.portfolio_api.model.Technologie;
import com.example.portfolio_api.repository.TechnologieRepository;

@RestController
@RequestMapping("/api/technologies")
public class TechnologieController {

    @Autowired
    private TechnologieRepository technologieRepository;

    @GetMapping
    public List<Technologie> getAllTechnologies() {
        return technologieRepository.findAll();
    }
}