package com.example.portfolio_api.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.portfolio_api.dto.ExperienceDTO;
import com.example.portfolio_api.model.Experience;
import com.example.portfolio_api.service.ExperienceService;

@RestController
@RequestMapping("/api/experiences")
public class ExperienceController {

    @Autowired
    private ExperienceService service;

    @GetMapping
    public List<ExperienceDTO> list(@RequestParam(defaultValue = "es") String lang) {
        return service.getAll(lang);
    }

    @GetMapping("/{id}")
    public ExperienceDTO one(@PathVariable Long id,
                         @RequestParam(defaultValue = "es") String lang) {
        return service.getExperience(id, lang);
    }
}
