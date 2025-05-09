package com.example.portfolio_api.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.example.portfolio_api.model.TranslationModel.ProjectTranslation;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
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
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String link;
    @Column(nullable = false)
    private LocalDate creationDate;
    private Boolean finished;

    @ManyToMany
    @JoinTable(
            name = "project_technology",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "technology_id")
    )
    private List<Technology> technologies;

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProjectTranslation> translations = new ArrayList<>();
    
    public Project(){}

    public Project(String link, LocalDate creationDate, Boolean finished,
            List<Technology> technologies , List<ProjectTranslation> translations) {
        this.link = link;
        this.creationDate = creationDate;
        this.finished = finished;
        this.technologies = technologies;
        this.translations = translations;
    }

    public void addTranslation(ProjectTranslation translation) {
        translation.setProject(this);
        translations.add(translation);
    }

    @PrePersist
    public void prePersist() {
        if (creationDate == null) {
            creationDate = LocalDate.now();
        }
    }
}
