package com.example.backend.projection;

import com.example.backend.model.Favorites;

public class FavoriteDTO {

    private Favorites favorites;

    private double averageRating;
    private int numOfRating;

    private Integer numOfStudent;
    private Long courseId;
    private Integer numOfVideo;

    public FavoriteDTO(Favorites favorites, double averageRating, int numOfRating, Integer numOfStudent, Long courseId, Integer numOfVideo) {
        this.favorites = favorites;
        this.averageRating = averageRating;
        this.numOfRating = numOfRating;
        this.numOfStudent = numOfStudent;
        this.courseId = courseId;
        this.numOfVideo = numOfVideo;
    }

    public Favorites getFavorites() {
        return favorites;
    }

    public void setFavorites(Favorites favorites) {
        this.favorites = favorites;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public int getNumOfRating() {
        return numOfRating;
    }

    public void setNumOfRating(int numOfRating) {
        this.numOfRating = numOfRating;
    }

    public Integer getNumOfStudent() {
        return numOfStudent;
    }

    public void setNumOfStudent(Integer numOfStudent) {
        this.numOfStudent = numOfStudent;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public Integer getNumOfVideo() {
        return numOfVideo;
    }

    public void setNumOfVideo(Integer numOfVideo) {
        this.numOfVideo = numOfVideo;
    }
}
