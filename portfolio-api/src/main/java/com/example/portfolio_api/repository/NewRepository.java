package com.example.portfolio_api.repository;

import com.example.portfolio_api.model.New;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewRepository extends JpaRepository<New, Long> {}