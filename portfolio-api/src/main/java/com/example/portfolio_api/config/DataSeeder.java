package com.example.portfolio_api.config;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.portfolio_api.enums.Technologie_enum.Classification;
import com.example.portfolio_api.enums.Technologie_enum.ExperienceLevel;
import com.example.portfolio_api.model.Course;
import com.example.portfolio_api.model.Experience;
import com.example.portfolio_api.model.Project;
import com.example.portfolio_api.model.Technology;
import com.example.portfolio_api.model.TranslationModel.CourseTranslation;
import com.example.portfolio_api.model.TranslationModel.ExperienceTranslation;
import com.example.portfolio_api.model.TranslationModel.ProjectTranslation;
import com.example.portfolio_api.repository.CourseRepository;
import com.example.portfolio_api.repository.ExperienceRepository;
import com.example.portfolio_api.repository.ProjectRepository;
import com.example.portfolio_api.repository.TechnologyRepository;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(TechnologyRepository techRepository, CourseRepository courseRepository, ProjectRepository projectRepository, ExperienceRepository experienceRepository) {
        return args -> {
            List<Technology> technologies = List.of(
                    new Technology("Java", ExperienceLevel.MEDIUM, Classification.IA),
                    new Technology("Spring", ExperienceLevel.MEDIUM, Classification.BACKEND),
                    new Technology("React", ExperienceLevel.LOW, Classification.BACKEND),
                    new Technology("Real", ExperienceLevel.LOW, Classification.BACKEND),
                    new Technology("Prueba", ExperienceLevel.HIGH, Classification.BACKEND)
            );
            techRepository.saveAll(technologies);

            // Crear cursos con traducciones
            List<Course> courses = new ArrayList<>();
            for (int i = 1; i <= 3; i++) {
                Course course = new Course();
                course.setDuration(6);
                course.setTechnologies(technologies);

                CourseTranslation esCourse = new CourseTranslation();
                esCourse.setLanguage("es");
                esCourse.setTitle("Curso DAM " + i);
                esCourse.setDescription("Curso de desarrollo de aplicaciones multiplataforma.");
                course.addTranslation(esCourse);

                CourseTranslation enCourse = new CourseTranslation();
                enCourse.setLanguage("en");
                enCourse.setTitle("DAM Course " + i);
                enCourse.setDescription("Multiplatform Application Development course.");
                course.addTranslation(enCourse);

                courses.add(course);
            }
            courseRepository.saveAll(courses);

            // Crear proyecto con traducciones
            Project project = new Project();
            project.setLink("https://miportfolio.com/proyecto1");
            project.setCreationDate(LocalDate.of(2024, 5, 1));
            project.setFinished(true);
            project.setTechnologies(technologies);

            ProjectTranslation esTranslation = new ProjectTranslation();
            esTranslation.setLanguage("es");
            esTranslation.setTitle("Proyecto Uno");
            esTranslation.setDescription("Descripción en español del proyecto.");
            project.addTranslation(esTranslation);

            ProjectTranslation enTranslation = new ProjectTranslation();
            enTranslation.setLanguage("en");
            enTranslation.setTitle("Project One");
            enTranslation.setDescription("English description of the project.");
            project.addTranslation(enTranslation);

            projectRepository.save(project);

            // Crear experiencias con traducciones
            List<Experience> experiences = new ArrayList<>();
            experiences.add(createExperience(LocalDate.of(2022, 5, 1), 6,
                    technologies, "Desarrollo de APIs RESTful con Spring Boot para gestión de usuarios.",
                    "RESTful API development with Spring Boot for user management."));

            experiences.add(createExperience(LocalDate.of(2023, 2, 15), 4,
                    technologies, "Participación en el desarrollo de un e-commerce completo usando React y Java.",
                    "Participated in full e-commerce development using React and Java."));

            experiences.add(createExperience(LocalDate.of(2021, 10, 10), 8,
                    technologies, "Creación de microservicios para sistema bancario utilizando Spring Cloud y Docker.",
                    "Built microservices for banking system using Spring Cloud and Docker."));

            experiences.add(createExperience(LocalDate.of(2023, 6, 1), 3,
                    technologies, "Mantenimiento y ampliación de funcionalidades en una plataforma educativa.",
                    "Maintained and expanded features on an educational platform."));

            experienceRepository.saveAll(experiences);
        };
    }

    private Experience createExperience(LocalDate date, int duration, List<Technology> techs, String descEs, String descEn) {
        Experience exp = new Experience();
        exp.setCreationDate(date);
        exp.setDuration(duration);
        exp.setTechnologies(techs);

        ExperienceTranslation es = new ExperienceTranslation();
        es.setLanguage("es");
        es.setTitle("Experiencia Profesional");
        es.setDescription(descEs);
        exp.addTranslation(es);

        ExperienceTranslation en = new ExperienceTranslation();
        en.setLanguage("en");
        en.setTitle("Professional Experience");
        en.setDescription(descEn);
        exp.addTranslation(en);

        return exp;
    }

}
