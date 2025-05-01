package com.example.portfolio_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.portfolio_api.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {}
