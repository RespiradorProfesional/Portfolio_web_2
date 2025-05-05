package com.example.portfolio_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.portfolio_api.model.Project;


public interface ProjectRepository extends JpaRepository<Project, Long> {}