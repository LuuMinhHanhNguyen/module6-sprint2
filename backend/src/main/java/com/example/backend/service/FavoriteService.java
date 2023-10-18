package com.example.backend.service;

import com.example.backend.model.Favorites;
import com.example.backend.projection.CourseProjection;
import com.example.backend.projection.FavoriteDTO;
import com.example.backend.repository.ICourseRepository;
import com.example.backend.repository.IFavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavoriteService implements IFavoriteService{

    @Autowired
    private IFavoriteRepository iFavoriteRepository;

    @Autowired
    private ICourseRepository iCourseRepository;

    @Override
    public List<FavoriteDTO> findByAppUserId(Long appUserId) {
        List<FavoriteDTO> results = new ArrayList<>();

        List<Favorites> favorites = iFavoriteRepository.findAllByAppUserId(appUserId);

        for (int i = 0; i < favorites.size(); i++) {
            CourseProjection projection = iCourseRepository.
                    findCourseRelatedInfoByCourseId(favorites.get(i).getCourse().getId());
            System.out.println(projection.getAverageRating());

            results.add(new FavoriteDTO(favorites.get(i), projection.getAverageRating(),
                    projection.getNumOfRating(),projection.getNumOfStudent(),
                    projection.getCourseId(), projection.getNumOfVideo()));
        }

        return results;
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
