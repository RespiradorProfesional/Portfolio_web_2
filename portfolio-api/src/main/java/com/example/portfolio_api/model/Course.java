package com.example.portfolio_api.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    // Duration in months
    private int duration;

    private String description;

    @ManyToMany
    @JoinTable(
            name = "course_technology",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "technology_id")
    )
    private List<Technology> technologies;

    public Course() {
    }

    public Course(String title, int duration, String description, List<Technology> technologies) {
        this.title = title;
        this.duration = duration;
        this.description = description;
        this.technologies = technologies;
    }

    // Getters y setters
}
