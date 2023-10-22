package com.example.backend.model;


import java.util.List;

public class SearchDTO {

    private String searchInfo;
    private int numOfRating;
    private
    List<String> topics;
    private Double priceStart;
    private Double priceEnd;

    private String sortBy;


    public SearchDTO(String searchInfo, int numOfRating, List<String> topics, Double priceStart, Double priceEnd, String sortBy) {
        this.searchInfo = searchInfo;
        this.numOfRating = numOfRating;
        this.topics = topics;
        this.priceStart = priceStart;
        this.priceEnd = priceEnd;
        this.sortBy = sortBy;
    }

    public String getSearchInfo() {
        return searchInfo;
    }

    public void setSearchInfo(String searchInfo) {
        this.searchInfo = searchInfo;
    }

    public int getNumOfRating() {
        return numOfRating;
    }

    public void setNumOfRating(int numOfRating) {
        this.numOfRating = numOfRating;
    }

    public List<String> getTopics() {
        return topics;
    }

    public void setTopics(List<String> topics) {
        this.topics = topics;
    }

    public Double getPriceStart() {
        return priceStart;
    }

    public void setPriceStart(Double priceStart) {
        this.priceStart = priceStart;
    }

    public Double getPriceEnd() {
        return priceEnd;
    }

    public void setPriceEnd(Double priceEnd) {
        this.priceEnd = priceEnd;
    }

    public String getSortBy() {
        return sortBy;
    }

    public void setSortBy(String sortBy) {
        this.sortBy = sortBy;
    }
}
