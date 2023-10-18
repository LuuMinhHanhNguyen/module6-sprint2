package com.example.backend.service;

import com.example.backend.model.Purchase;
import com.example.backend.projection.PurchaseDTO;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IPurchaseService {
    Purchase addNew(Purchase newPurchase);

    List<Purchase> createPurchases(Long appUserId);

    List<PurchaseDTO> getPurchases(Long appUserId);

    boolean existsPurchaseByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);

    Integer getNumOfPurchaseByCourseId(@Param("courseId") Long courseId);

}
