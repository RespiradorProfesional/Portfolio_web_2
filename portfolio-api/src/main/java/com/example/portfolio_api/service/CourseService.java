package com.example.portfolio_api.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolio_api.dto.CourseDTO;
import com.example.portfolio_api.dto.ProjectDTO;
import com.example.portfolio_api.mappers.CourseMapper;
import com.example.portfolio_api.mappers.ProjectMapper;
import com.example.portfolio_api.model.Course;
import com.example.portfolio_api.model.Project;
import com.example.portfolio_api.repository.CourseRepository;
import com.example.portfolio_api.repository.ProjectRepository;

import jakarta.persistence.EntityNotFoundException;


@Service
public class CourseService {
    
    @Autowired
    private CourseRepository courseRepository;
    @Autowired private CourseMapper mapper;

    public CourseDTO getCourse(Long id, String lang) {
        Course c = courseRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Course not found"));
        return mapper.map(c, lang);
    }

    public List<CourseDTO> getAll(String lang) {
        return courseRepository.findAll().stream()
            .map(c -> mapper.map(c, lang))
            .collect(Collectors.toList());
    }
}