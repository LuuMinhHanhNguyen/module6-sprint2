package com.example.backend.service;

import com.example.backend.model.Cart;
import com.example.backend.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService{
    @Autowired
    private ICartRepository iCartRepository;
    @Override
    public List<Cart> findAllByAppUserId(Long appUserId) {
        return iCartRepository.findAllByAppUserId(appUserId);
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
