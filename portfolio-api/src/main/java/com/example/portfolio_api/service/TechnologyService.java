package com.example.portfolio_api.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolio_api.model.Technology;
import com.example.portfolio_api.repository.TechnologyRepository;

@Service
public class TechnologyService {
    
    @Autowired
    private TechnologyRepository technologyRepository;

    public List<Technology> getAllTechnologies() {
        return technologyRepository.findAll();
    }

    public Optional<Technology> getTechnologyById(Long id) {
        return technologyRepository.findById(id);
    }
}