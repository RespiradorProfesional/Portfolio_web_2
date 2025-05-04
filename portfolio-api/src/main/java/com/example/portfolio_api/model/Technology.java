package com.example.portfolio_api.model;

import com.example.portfolio_api.enums.Technologie_enum.Classification;
import com.example.portfolio_api.enums.Technologie_enum.ExperienceLevel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Technology {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Enumerated(EnumType.STRING)
    private ExperienceLevel experience;

    @Enumerated(EnumType.STRING)
    private Classification classification;

    public Technology() {
    }

    public Technology(String name, ExperienceLevel experience, Classification classification) {
        this.name = name;
        this.experience = experience;
        this.classification = classification;
    }
}
