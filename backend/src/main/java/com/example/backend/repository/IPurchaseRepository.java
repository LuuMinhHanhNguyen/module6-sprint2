package com.example.backend.repository;

import com.example.backend.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.method.P;

import java.util.List;

public interface IPurchaseRepository extends JpaRepository<Purchase, Long> {

    List<Purchase> findAllByAppUser_Id(Long appUserId);

    boolean existsPurchaseByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);


    @Query(nativeQuery = true, value = " select count(course_id) from purchases where course_id = :courseId ")
    Integer getNumOfPurchaseByCourseId(@Param("courseId") Long courseId);
}
