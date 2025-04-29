package com.example.portfolio_api.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.portfolio_api.model.New;
import com.example.portfolio_api.model.Technologie;
import com.example.portfolio_api.repository.NewRepository;
import com.example.portfolio_api.repository.TechnologieRepository;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(NewRepository repository,TechnologieRepository techrepository) {
        return args -> {
            New proyectoWeb = new New();
            proyectoWeb.setName("Proyecto Web");
            proyectoWeb.setDescription("Portfolio personal usando Spring Boot y React.");
            repository.save(proyectoWeb);

            New apiRest = new New();
            apiRest.setName("API REST");
            apiRest.setDescription("API con CRUD conectada a MySQL.");
            repository.save(apiRest);

            Technologie technologie_1 = new Technologie();
            technologie_1.setName("Java");
            technologie_1.setExperience(5);
            techrepository.save(technologie_1);

            Technologie technologie_2 = new Technologie();
            technologie_2.setName("React");
            technologie_2.setExperience(10);
            techrepository.save(technologie_2);
            
            Technologie technologie_3 = new Technologie();
            technologie_3.setName("Prueba");
            technologie_3.setExperience(2);
            techrepository.save(technologie_3);
        };
    }
}