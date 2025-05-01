package com.example.portfolio_api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolio_api.model.Course;
import com.example.portfolio_api.repository.CourseRepository;


@Service
public class CourseService {
    
    @Autowired
    private CourseRepository courseRepository;

    // Método para obtener la lista de cursos con información general
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // Método para obtener la información completa de un curso específico
    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }
}