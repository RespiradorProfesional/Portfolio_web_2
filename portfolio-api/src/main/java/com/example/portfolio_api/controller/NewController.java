package com.example.portfolio_api.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.portfolio_api.model.New;
import com.example.portfolio_api.repository.NewRepository;

@RestController
@RequestMapping("/api/news")
public class NewController {

    @Autowired
    private NewRepository newRepository;

    @GetMapping
    public List<New> getAllNews() {
        return newRepository.findAll();
    }

    @GetMapping("/{id}")
    public New getNewById(@PathVariable Long id) {
        return newRepository.findById(id).orElse(null);
    }

    @PostMapping
    public New createNew(@RequestBody New news) {
        return newRepository.save(news);
    }

    @PutMapping("/{id}")
    public New updateNew(@PathVariable Long id, @RequestBody New updatedNew) {
        return newRepository.findById(id).map(news -> {
            news.setName(updatedNew.getName());
            news.setDescription(updatedNew.getDescription());
            return newRepository.save(news);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteNew(@PathVariable Long id) {
        newRepository.deleteById(id);
    }
}