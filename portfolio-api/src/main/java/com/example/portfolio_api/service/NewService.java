package com.example.portfolio_api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolio_api.model.New;
import com.example.portfolio_api.repository.NewRepository;

@Service
public class NewService {
    
    @Autowired
    private NewRepository newRepository;

    // Método para obtener la lista de cursos con información general
    public List<New> getAllNews() {
        return newRepository.findAll();
    }

    // Método para obtener la información completa de un curso específico
    public Optional<New> getNewById(Long id) {
        return newRepository.findById(id);
    }
}