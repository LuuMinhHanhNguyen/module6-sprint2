package com.example.backend.service;

import com.example.backend.model.Cart;
import com.example.backend.model.Favorites;
import com.example.backend.model.Purchase;
import com.example.backend.projection.CourseProjection;
import com.example.backend.projection.FavoriteDTO;
import com.example.backend.projection.PurchaseDTO;
import com.example.backend.repository.ICartRepository;
import com.example.backend.repository.ICourseRepository;
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

    @Autowired
    private ICartRepository iCartRepository;

    @Autowired
    private ICourseRepository iCourseRepository;

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
        List<Cart> carts = iCartRepository.findAllByAppUserId(appUserId);

        List<Purchase> purchases = new ArrayList<>();

        for (Cart tempCart: carts) {
            purchases.add(addNew(new Purchase(formattedDateTime, tempCart.getAppUser(),
                    tempCart.getCourse(), tempCart.getCourse().getPrice())));
        }
        iCartService.clearCart(appUserId);
        return purchases;
    }

    @Override
    public List<PurchaseDTO> getPurchases(Long appUserId) {

        List<PurchaseDTO> results = new ArrayList<>();

        List<Purchase> purchases = iPurchaseRepository.findAllByAppUser_Id(appUserId);

        for (int i = 0; i < purchases.size(); i++) {
            CourseProjection projection = iCourseRepository.
                    findCourseRelatedInfoByCourseId(purchases.get(i).getCourse().getId());
            System.out.println(projection.getAverageRating());

            results.add(new PurchaseDTO(purchases.get(i), projection.getAverageRating(),
                    projection.getNumOfRating(),projection.getNumOfStudent(),
                    projection.getCourseId(), projection.getNumOfVideo()));
        }

        return results;

    }

    @Override
    public boolean existsPurchaseByAppUser_IdAndCourse_Id(Long appUserId, Long courseId) {
        return iPurchaseRepository.existsPurchaseByAppUser_IdAndCourse_Id(appUserId,courseId);
    }

    @Override
    public Integer getNumOfPurchaseByCourseId(Long courseId) {
        return iPurchaseRepository.getNumOfPurchaseByCourseId(courseId);
    }
}
