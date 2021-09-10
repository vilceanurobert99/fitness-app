package com.licentarobert.fitnessapp.dao;

import com.licentarobert.fitnessapp.entity.Mealplan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface MealRepository extends JpaRepository<Mealplan, Long> {

    Page<Mealplan> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);

    Page<Mealplan> findByNameContaining(@RequestParam("name") String name, Pageable pageable);

}
