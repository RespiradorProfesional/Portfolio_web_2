package com.example.portfolio_api.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.portfolio_api.model.TranslationModel.ExperienceTranslation;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Duration in months
    private int duration;

    private String company;

    private LocalDate creationDate;

    @ManyToMany
    @JoinTable(
            name = "experience_technology",
            joinColumns = @JoinColumn(name = "experience_id"),
            inverseJoinColumns = @JoinColumn(name = "technology_id")
    )
    private List<Technology> technologies;

    @OneToMany(mappedBy = "experience", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ExperienceTranslation> translations = new ArrayList<>();

    public Experience() {
    }

    public Experience(Long id, String company, LocalDate creationDate, int duration,  List<Technology> technologies, List<ExperienceTranslation> translations) {
        this.id = id;
        this.company = company;
        this.creationDate = creationDate;
        this.duration = duration;
        this.technologies = technologies;
        this.translations = translations;
    }

    public void addTranslation(ExperienceTranslation translation) {
        translation.setExperience(this);
        translations.add(translation);
    }

    @PrePersist
    public void prePersist() {
        if (creationDate == null) {
            creationDate = LocalDate.now();
        }
    }

    // Getters y setters
}
