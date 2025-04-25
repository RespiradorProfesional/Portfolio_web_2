package com.example.portfolio_api.config;

import com.example.portfolio_api.model.New;
import com.example.portfolio_api.repository.NewRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(NewRepository repository) {
        return args -> {
            New proyectoWeb = new New();
            proyectoWeb.setNombre("Proyecto Web");
            proyectoWeb.setDescription("Portfolio personal usando Spring Boot y React.");
            repository.save(proyectoWeb);

            New apiRest = new New();
            apiRest.setNombre("API REST");
            apiRest.setDescription("API con CRUD conectada a MySQL.");
            repository.save(apiRest);
        };
    }
}