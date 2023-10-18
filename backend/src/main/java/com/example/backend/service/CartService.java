package com.example.backend.service;

import com.example.backend.model.Cart;
import com.example.backend.model.Favorites;
import com.example.backend.projection.CartDTO;
import com.example.backend.projection.CourseProjection;
import com.example.backend.projection.FavoriteDTO;
import com.example.backend.repository.ICartRepository;
import com.example.backend.repository.ICourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService implements ICartService{
    @Autowired
    private ICartRepository iCartRepository;

    @Autowired
    private ICourseRepository iCourseRepository;
    @Override
    public List<CartDTO> findAllByAppUserId(Long appUserId) {
        List<CartDTO> results = new ArrayList<>();

        List<Cart> carts = iCartRepository.findAllByAppUserId(appUserId);

        for (int i = 0; i < carts.size(); i++) {
            CourseProjection projection = iCourseRepository.
                    findCourseRelatedInfoByCourseId(carts.get(i).getCourse().getId());
            System.out.println(projection.getAverageRating());

            results.add(new CartDTO(carts.get(i), projection.getAverageRating(),
                    projection.getNumOfRating(),projection.getNumOfStudent(),
                    projection.getCourseId(), projection.getNumOfVideo()));
        }

        return results;


    }

    @Override
    public void addToCart(Long appUserId, Long courseId) {
        iCartRepository.addToCart(appUserId, courseId);
    }

    @Override
    public Cart checkCart(Long appUserId, Long courseId) {
        return iCartRepository.findByAppUser_IdAndCourse_Id(appUserId, courseId);
    }

    @Override
    public void deleteCart(Long cartId) {
        iCartRepository.deleteById(cartId);
    }

    @Override
    public void clearCart(Long appUserId) {
        iCartRepository.deleteAllByAppUser_Id(appUserId);
    }

}
