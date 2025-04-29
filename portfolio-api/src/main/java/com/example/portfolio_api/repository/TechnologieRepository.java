package com.example.portfolio_api.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.portfolio_api.model.Technologie;

public interface TechnologieRepository extends JpaRepository<Technologie, Long> {}