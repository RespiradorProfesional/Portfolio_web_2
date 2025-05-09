package com.example.portfolio_api.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.portfolio_api.dto.CourseDTO;
import com.example.portfolio_api.model.Course;
import com.example.portfolio_api.model.TranslationModel.CourseTranslation;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring")
public interface CourseMapper {

    @Mapping(target = "id", source = "course.id")
    @Mapping(target = "title", source = "translation.title")
    @Mapping(target = "description", source = "translation.description")
    @Mapping(target = "duration", source = "course.duration")
    @Mapping(target = "technologies", expression = "java(course.getTechnologies().stream().map(tech -> tech.getName()).toList())")
    CourseDTO toDTO(Course course, CourseTranslation translation);

    default CourseDTO map(Course course, String lang) {
        CourseTranslation t = course.getTranslations().stream()
            .filter(tr -> tr.getLanguage().equalsIgnoreCase(lang))
            .findFirst()
            .orElseThrow(() -> new EntityNotFoundException("No translation for " + lang));
        return toDTO(course, t);
    }
}