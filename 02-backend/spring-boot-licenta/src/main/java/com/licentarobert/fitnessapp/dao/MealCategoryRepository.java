package com.licentarobert.fitnessapp.dao;

import com.licentarobert.fitnessapp.entity.MealCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "mealCategory", path="meal-category")
public interface MealCategoryRepository extends JpaRepository<MealCategory, Long> {
}
