package com.example.portfolio_api.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolio_api.dto.ExperienceDTO;
import com.example.portfolio_api.mappers.ExperienceMapper;
import com.example.portfolio_api.model.Experience;
import com.example.portfolio_api.repository.ExperienceRepository;

import jakarta.persistence.EntityNotFoundException;


@Service
public class ExperienceService {
    
    @Autowired
    private ExperienceRepository experienceRepository;
    @Autowired private ExperienceMapper mapper;

    public ExperienceDTO getExperience(Long id, String lang) {
        Experience c = experienceRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Course not found"));
        return mapper.map(c, lang);
    }

    public List<ExperienceDTO> getAll(String lang) {
        return experienceRepository.findAll().stream()
            .map(c -> mapper.map(c, lang))
            .collect(Collectors.toList());
    }
}