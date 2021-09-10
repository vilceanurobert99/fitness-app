package com.licentarobert.fitnessapp.dao;

import com.licentarobert.fitnessapp.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
