package com.example.backend.service;

import com.example.backend.model.Cart;

import java.util.List;

public interface ICartService {
    List<Cart> findAllByAppUserId(Long appUserId);

    void addToCart(Long appUserId, Long courseId);

    Cart checkCart(Long appUserId, Long courseId);

    void deleteCart(Long cartId);

    void clearCart(Long appUserId);

}
