package com.example.backend.service;

import com.example.backend.model.Cart;
import com.example.backend.model.Purchase;
import com.example.backend.repository.IPurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class PurchaseService implements IPurchaseService{

    @Autowired
    private ICartService iCartService;

    @Autowired
    private IPurchaseRepository iPurchaseRepository;

    @Override
    public Purchase addNew(Purchase newPurchase) {
        return iPurchaseRepository.save(newPurchase);
    }

    @Override
    public List<Purchase> createPurchases(Long appUserId) {

        // get current date time
        LocalDateTime currentDateTime = LocalDateTime.now();

        // format
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        String formattedDateTime = currentDateTime.format(formatter);
        // create order
        List<Cart> carts = iCartService.findAllByAppUserId(appUserId);

        List<Purchase> purchases = new ArrayList<>();

        for (Cart tempCart: carts) {
            purchases.add(addNew(new Purchase(formattedDateTime, tempCart.getAppUser(),
                    tempCart.getCourse(), tempCart.getCourse().getPrice())));
        }
        iCartService.clearCart(appUserId);
        return purchases;
    }

    @Override
    public List<Purchase> getPurchases(Long appUserId) {
        return iPurchaseRepository.findAllByAppUser_Id(appUserId);
    }

    @Override
    public boolean existsPurchaseByAppUser_IdAndCourse_Id(Long appUserId, Long courseId) {
        return iPurchaseRepository.existsPurchaseByAppUser_IdAndCourse_Id(appUserId,courseId);
    }
}
