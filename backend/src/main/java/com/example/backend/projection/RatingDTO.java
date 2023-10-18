package com.example.backend.projection;

public class RatingDTO {
    private double averageRating;
    private int numOfRating;

    public RatingDTO(double averageRating, int numOfRating) {
        this.averageRating = averageRating;
        this.numOfRating = numOfRating;
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
}
