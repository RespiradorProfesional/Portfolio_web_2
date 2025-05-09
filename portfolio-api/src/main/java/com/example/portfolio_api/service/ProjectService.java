package com.example.portfolio_api.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolio_api.dto.ProjectDTO;
import com.example.portfolio_api.mappers.ProjectMapper;
import com.example.portfolio_api.model.Project;
import com.example.portfolio_api.repository.ProjectRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ProjectService {
    @Autowired private ProjectRepository projectRepo;
    @Autowired private ProjectMapper mapper;

    public ProjectDTO getProject(Long id, String lang) {
        Project p = projectRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Project not found"));
        return mapper.map(p, lang);
    }

    public List<ProjectDTO> getAll(String lang) {
        return projectRepo.findAll().stream()
            .map(p -> mapper.map(p, lang))
            .collect(Collectors.toList());
    }
}