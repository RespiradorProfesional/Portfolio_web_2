package com.example.portfolio_api.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.portfolio_api.dto.ExperienceDTO;
import com.example.portfolio_api.model.Experience;
import com.example.portfolio_api.model.TranslationModel.ExperienceTranslation;

import jakarta.persistence.EntityNotFoundException;

@Mapper(componentModel = "spring")
public interface ExperienceMapper {

    @Mapping(target = "id", source = "experience.id")
    @Mapping(target = "title", source = "translation.title")
    @Mapping(target = "description", source = "translation.description")
    @Mapping(target = "duration", source = "experience.duration")
    @Mapping(target = "creationDate", source = "experience.creationDate")
    @Mapping(target = "technologies", expression = "java(experience.getTechnologies().stream().map(tech -> tech.getName()).toList())")
    ExperienceDTO toDTO(Experience experience, ExperienceTranslation translation);

    default ExperienceDTO map(Experience experience, String lang) {
        ExperienceTranslation t = experience.getTranslations().stream()
            .filter(tr -> tr.getLanguage().equalsIgnoreCase(lang))
            .findFirst()
            .orElseThrow(() -> new EntityNotFoundException("No translation for " + lang));
        return toDTO(experience, t);
    }
}