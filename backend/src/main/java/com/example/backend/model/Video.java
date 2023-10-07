package com.example.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "videos")
public class Video {
    @Id
    private Long id;

    private String title;
    private String urlPath;

    @Column(name = "isFree")
    private Boolean isFree;

    @ManyToOne
    private Course course;

    public Video() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrlPath() {
        return urlPath;
    }

    public void setUrlPath(String urlPath) {
        this.urlPath = urlPath;
    }

    public Boolean getFree() {
        return isFree;
    }

    public void setFree(Boolean free) {
        isFree = free;
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
