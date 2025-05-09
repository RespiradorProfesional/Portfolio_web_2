package com.example.portfolio_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.portfolio_api.dto.ProjectDTO;
import com.example.portfolio_api.service.ProjectService;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired private ProjectService service;

    @GetMapping
    public List<ProjectDTO> list(@RequestParam(defaultValue = "es") String lang) {
        return service.getAll(lang);
    }

    @GetMapping("/{id}")
    public ProjectDTO one(@PathVariable Long id,
                         @RequestParam(defaultValue = "es") String lang) {
        return service.getProject(id, lang);
    }
}