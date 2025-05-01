package com.example.portfolio_api.config;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.portfolio_api.enums.Technologie_enum.Classification;
import com.example.portfolio_api.enums.Technologie_enum.ExperienceLevel;
import com.example.portfolio_api.model.Course;
import com.example.portfolio_api.model.New;
import com.example.portfolio_api.model.Technology;
import com.example.portfolio_api.repository.CourseRepository;
import com.example.portfolio_api.repository.NewRepository;
import com.example.portfolio_api.repository.TechnologyRepository;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(NewRepository newRepository,TechnologyRepository techRepository, CourseRepository courseRepository) {
        return args -> {
            List<New> projects = List.of(
                new New("Proyecto Web", "Portfolio personal usando Spring Boot y React."),
                new New("API REST", "API con CRUD conectada a MySQL.")
            );
            newRepository.saveAll(projects);
    
            List<Technology> technologies = List.of(
                new Technology("Java", ExperienceLevel.MEDIUM, Classification.IA),
                new Technology("Spring", ExperienceLevel.MEDIUM, Classification.BACKEND),
                new Technology("React", ExperienceLevel.LOW, Classification.BACKEND),
                new Technology("Real", ExperienceLevel.LOW, Classification.BACKEND),
                new Technology("Prueba", ExperienceLevel.HIGH, Classification.BACKEND)
            );
            techRepository.saveAll(technologies);

            List<Course> courses = List.of(
                new Course("DAM",6,"que buen curso",technologies),
                new Course("DAM",6,"que buen curso",technologies),
                new Course("DAM",6,"que buen curso",technologies)
            );
            courseRepository.saveAll(courses);

        };
    }
}