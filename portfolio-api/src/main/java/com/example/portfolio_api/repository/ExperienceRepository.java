package com.example.portfolio_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.portfolio_api.model.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {}