package com.example.portfolio_api.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class New {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    @Column(nullable = false)
    private LocalDate creationDate;

    public New() {
    }

    public New(String name, String description) {
        this.name = name;
        this.description = description;
    }

    @PrePersist
    public void prePersist() {
        if (creationDate == null) {
            creationDate = LocalDate.now();
        }
    }
}
