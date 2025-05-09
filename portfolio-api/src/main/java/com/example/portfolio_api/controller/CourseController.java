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

import com.example.portfolio_api.dto.CourseDTO;
import com.example.portfolio_api.dto.ProjectDTO;
import com.example.portfolio_api.model.Course;
import com.example.portfolio_api.service.CourseService;
import com.example.portfolio_api.service.ProjectService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired private CourseService service;

    @GetMapping
    public List<CourseDTO> list(@RequestParam(defaultValue = "es") String lang) {
        return service.getAll(lang);
    }

    @GetMapping("/{id}")
    public CourseDTO one(@PathVariable Long id,
                         @RequestParam(defaultValue = "es") String lang) {
        return service.getCourse(id, lang);
    }
}
