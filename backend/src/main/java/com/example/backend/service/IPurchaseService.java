package com.example.backend.service;

import com.example.backend.model.Purchase;

import java.util.List;

public interface IPurchaseService {
    Purchase addNew(Purchase newPurchase);

    List<Purchase> createPurchases(Long appUserId);

    List<Purchase> getPurchases(Long appUserId);

    boolean existsPurchaseByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);

}
