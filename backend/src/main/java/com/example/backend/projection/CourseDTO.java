package com.example.backend.projection;

import com.example.backend.model.Course;

public class CourseDTO {
    private Course course;
    private double averageRating;
    private int numOfRating;

    private Integer numOfStudent;
    private Long courseId;
    private Integer numOfVideo;

    public CourseDTO(Course course, double averageRating, int numOfRating, Integer numOfStudent, Long courseId, Integer numOfVideo) {
        this.course = course;
        this.averageRating = averageRating;
        this.numOfRating = numOfRating;
        this.numOfStudent = numOfStudent;
        this.courseId = courseId;
        this.numOfVideo = numOfVideo;
    }

    public Integer getNumOfVideo() {
        return numOfVideo;
    }

    public void setNumOfVideo(Integer numOfVideo) {
        this.numOfVideo = numOfVideo;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
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
}
