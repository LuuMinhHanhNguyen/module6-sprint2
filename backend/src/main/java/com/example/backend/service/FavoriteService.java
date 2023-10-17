package com.example.backend.service;

import com.example.backend.model.Favorites;
import com.example.backend.repository.IFavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService implements IFavoriteService{

    @Autowired
    private IFavoriteRepository iFavoriteRepository;
    @Override
    public List<Favorites> findAllByAppUserId(Long appUserId) {
        return iFavoriteRepository.findAllByAppUserId(appUserId);
    }

    @Override
    public int addToFavorites(Long appUserId, Long courseId) {
        return iFavoriteRepository.addToFavorites(appUserId,courseId);
    }

    @Override
    public Favorites checkFavorite(Long appUserId, Long courseId) {
        return iFavoriteRepository.findByAppUser_IdAndCourse_Id(appUserId,courseId);
    }

    @Override
    public void deleteFavorite(Long favoriteId) {
        iFavoriteRepository.deleteById(favoriteId);
    }
}
