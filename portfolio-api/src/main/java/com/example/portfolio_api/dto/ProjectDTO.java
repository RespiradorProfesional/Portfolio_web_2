package com.example.portfolio_api.dto;

import java.time.LocalDate;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectDTO {
    private Long id;
    private String title;
    private String description;
    private String link;
    private LocalDate creationDate;
    private Boolean finished;
    private List<String> technologies;

    public ProjectDTO(LocalDate creationDate, String description, Boolean finished, Long id, String link, List<String> technologies, String title) {
        this.creationDate = creationDate;
        this.description = description;
        this.finished = finished;
        this.id = id;
        this.link = link;
        this.technologies = technologies;
        this.title = title;
    }
}
    