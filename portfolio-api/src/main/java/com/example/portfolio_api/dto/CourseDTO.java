package com.example.portfolio_api.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseDTO {
    private Long id;
    private String title;
    private String description;
    private int duration;
    private List<String> technologies;

    
    public CourseDTO(Long id, String title, String description, int duration, List<String> technologies) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.technologies = technologies;
    }


}
    