package com.example.portfolio_api.model;

import java.util.ArrayList;
import java.util.List;

import com.example.portfolio_api.model.TranslationModel.CourseTranslation;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Duration in months
    private int duration;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CourseTranslation> translations = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "course_technology",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "technology_id")
    )
    private List<Technology> technologies;

    public Course() {
    }

    public Course(int duration, List<Technology> technologies, List<CourseTranslation> translations) {
        this.duration = duration;
        this.technologies = technologies;
        this.translations = translations;
    }

    public void addTranslation(CourseTranslation translation) {
        translation.setCourse(this);
        translations.add(translation);
    }
    // Getters y setters
}
