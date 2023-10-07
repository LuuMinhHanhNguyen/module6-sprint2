package com.example.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "purchases")
public class Purchase {
    @Id
    private Long id;

    @Column(name = "purchaseDate")
    private String purchaseDate;

    @ManyToOne
    private AppUser appUser;

    @ManyToOne
    private Course course;

    public Purchase() {
    }

    public String getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(String purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
