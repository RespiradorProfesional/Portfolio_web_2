package com.example.portfolio_api.config;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.portfolio_api.enums.Technologie_enum.Classification;
import com.example.portfolio_api.enums.Technologie_enum.ExperienceLevel;
import com.example.portfolio_api.model.Course;
import com.example.portfolio_api.model.Experience;
import com.example.portfolio_api.model.New;
import com.example.portfolio_api.model.Project;
import com.example.portfolio_api.model.Technology;
import com.example.portfolio_api.repository.CourseRepository;
import com.example.portfolio_api.repository.ExperienceRepository;
import com.example.portfolio_api.repository.NewRepository;
import com.example.portfolio_api.repository.ProjectRepository;
import com.example.portfolio_api.repository.TechnologyRepository;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(NewRepository newRepository, TechnologyRepository techRepository, CourseRepository courseRepository, ProjectRepository projectRepository, ExperienceRepository experienceRepository) {
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
                    new Course("DAM", 6, "que buen curso", technologies),
                    new Course("DAM", 6, "que buen curso", technologies),
                    new Course("DAM", 6, "que buen curso", technologies)
            );
            courseRepository.saveAll(courses);

            List<Project> realProjects = List.of(
                    new Project("Portfolio", "Aplicación web personal", "https://miportfolio.com", LocalDate.of(2023, 10, 1), true, technologies),
                    new Project("Blog", "Blog hecho en Spring Boot", "https://blogejemplo.com", LocalDate.of(2024, 1, 15), false, technologies),
                    new Project("Tienda Online", "E-commerce con React y Spring", "https://tiendaonline.com", LocalDate.of(2024, 3, 20), true, technologies)
            );
            projectRepository.saveAll(realProjects);

            List<Experience> experiences = List.of(
                    new Experience(LocalDate.of(2022, 5, 1), "Desarrollo de APIs RESTful con Spring Boot para gestión de usuarios.", 6, null, technologies, "Backend Developer en TechCorp"),
                    new Experience(LocalDate.of(2023, 2, 15), "Participación en el desarrollo de un e-commerce completo usando React y Java.", 4, null, technologies, "Full Stack Developer en ShopSolutions"),
                    new Experience(LocalDate.of(2021, 10, 10), "Creación de microservicios para sistema bancario utilizando Spring Cloud y Docker.", 8, null, technologies, "Microservices Engineer en BankIT"),
                    new Experience(LocalDate.of(2023, 6, 1), "Mantenimiento y ampliación de funcionalidades en una plataforma educativa.", 3, null, technologies, "Frontend Developer en EduPlatform")
            );
            experienceRepository.saveAll(experiences);
        };
    }
}
