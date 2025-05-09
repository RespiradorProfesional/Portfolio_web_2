package com.example.portfolio_api.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.portfolio_api.dto.ProjectDTO;
import com.example.portfolio_api.model.Project;
import com.example.portfolio_api.model.TranslationModel.ProjectTranslation;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring")
public interface ProjectMapper {


    @Mapping(target = "id", source = "project.id")
    @Mapping(target = "title", source = "translation.title")
    @Mapping(target = "description", source = "translation.description")
    @Mapping(target = "link", source = "project.link")
    @Mapping(target = "creationDate", source = "project.creationDate")
    @Mapping(target = "finished", source = "project.finished")
    @Mapping(target = "technologies", expression = "java(project.getTechnologies().stream().map(tech -> tech.getName()).toList())")
    ProjectDTO toDTO(Project project, ProjectTranslation translation);

    default ProjectDTO map(Project project, String lang) {
        ProjectTranslation t = project.getTranslations().stream()
            .filter(tr -> tr.getLanguage().equalsIgnoreCase(lang))
            .findFirst()
            .orElseThrow(() -> new EntityNotFoundException("No translation for " + lang));
        return toDTO(project, t);
    }
}