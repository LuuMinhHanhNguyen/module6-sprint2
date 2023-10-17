package com.example.backend.repository;

import com.example.backend.model.Cart;
import com.example.backend.model.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface IFavoriteRepository extends JpaRepository<Favorites, Long> {

    List<Favorites> findAllByAppUserId(Long appUserId);

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "insert into favorites(app_user_id, course_id) values (:appUserId, :courseId)")
    int addToFavorites(Long appUserId, Long courseId);

    Favorites findByAppUser_IdAndCourse_Id(Long appUserId, Long courseId);
}
