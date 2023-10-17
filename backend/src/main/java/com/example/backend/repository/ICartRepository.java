package com.example.backend.repository;

import com.example.backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findAllByAppUserId(Long appUserId);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "insert into cart(app_user_id, course_id) values (:appUserId, :courseId)")
    int addToCart(Long appUserId, Long courseId);

    Cart findByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);


    @Transactional
    @Modifying
    void deleteAllByAppUser_Id(Long appUserId);




}
