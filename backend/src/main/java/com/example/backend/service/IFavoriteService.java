package com.example.backend.service;

import com.example.backend.model.Favorites;
import com.example.backend.projection.FavoriteDTO;

import java.util.List;

public interface IFavoriteService {

    List<FavoriteDTO> findByAppUserId(Long appUserId);

    int addToFavorites(Long appUserId, Long courseId);

    Favorites checkFavorite(Long appUserId, Long courseId);
    void deleteFavorite(Long favoriteId);
}
