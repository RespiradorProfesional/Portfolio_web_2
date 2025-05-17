package com.example.portfolio_api.dto;

import java.time.LocalDate;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExperienceDTO {
    private Long id;
    private String title;
    private String description;
    private String company;
    private int duration;
    private LocalDate creationDate;
    private List<String> technologies;
}
    