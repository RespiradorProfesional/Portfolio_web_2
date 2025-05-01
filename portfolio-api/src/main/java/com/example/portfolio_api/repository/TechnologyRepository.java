package com.example.portfolio_api.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.portfolio_api.model.Technology;


public interface TechnologyRepository extends JpaRepository<Technology, Long> {}