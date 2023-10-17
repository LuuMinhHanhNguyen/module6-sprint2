package com.example.backend.repository;

import com.example.backend.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IPurchaseRepository extends JpaRepository<Purchase, Long> {

    List<Purchase> findAllByAppUser_Id(Long appUserId);

    boolean existsPurchaseByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);
}
