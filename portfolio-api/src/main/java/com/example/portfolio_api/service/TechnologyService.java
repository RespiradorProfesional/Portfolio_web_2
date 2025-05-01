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

    // Método para obtener la lista de cursos con información general
    public List<Technology> getAllTechnologies() {
        return technologyRepository.findAll();
    }

    // Método para obtener la información completa de un curso específico
    public Optional<Technology> getTechnologyById(Long id) {
        return technologyRepository.findById(id);
    }
}