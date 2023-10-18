package com.example.backend.projection;

import com.example.backend.model.Purchase;

public class PurchaseDTO {

    private Purchase purchase;

    private double averageRating;
    private int numOfRating;

    private Integer numOfStudent;
    private Long courseId;
    private Integer numOfVideo;

    public PurchaseDTO(Purchase purchase, double averageRating, int numOfRating, Integer numOfStudent, Long courseId, Integer numOfVideo) {
        this.purchase = purchase;
        this.averageRating = averageRating;
        this.numOfRating = numOfRating;
        this.numOfStudent = numOfStudent;
        this.courseId = courseId;
        this.numOfVideo = numOfVideo;
    }

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
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
