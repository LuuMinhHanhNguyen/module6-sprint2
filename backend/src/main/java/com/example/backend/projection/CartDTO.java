package com.example.backend.projection;

import com.example.backend.model.Cart;

public class CartDTO {

    private Cart cart;

    private double averageRating;
    private int numOfRating;

    private Integer numOfStudent;
    private Long courseId;
    private Integer numOfVideo;

    public CartDTO(Cart cart, double averageRating, int numOfRating, Integer numOfStudent, Long courseId, Integer numOfVideo) {
        this.cart = cart;
        this.averageRating = averageRating;
        this.numOfRating = numOfRating;
        this.numOfStudent = numOfStudent;
        this.courseId = courseId;
        this.numOfVideo = numOfVideo;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
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
