package com.example.backend.repository;

import com.example.backend.model.Course;
import com.example.backend.projection.CourseProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICourseRepository extends JpaRepository<Course, Long> {

    @Query(nativeQuery = true, value = " SELECT courses.id as courseId, "+
            "CASE WHEN COUNT(comments.rating) = 0 THEN 0 ELSE AVG(comments.rating) END AS averageRating," +
            " COUNT(comments.rating) as numOfRating," +
            "(select count(course_id) from purchases where purchases.course_id = courses.id) as numOfStudent, " +
            " (select count(course_id)  from videos where videos.course_id = courses.id) as numOfVideo " +
            "FROM courses LEFT JOIN comments ON courses.id = comments.course_id " +
            "GROUP BY courses.id ")
    List<CourseProjection> findCoursesWithRatingsAndStudents();

    @Query(nativeQuery = true, value = " SELECT courses.id as courseId," +
            "       CASE WHEN COUNT(comments.rating) = 0 THEN 0 ELSE AVG(comments.rating) END AS averageRating," +
            "       COUNT(comments.rating) as numOfRating," +
            "       (select count(course_id) from purchases where purchases.course_id = courses.id) as numOfStudent," +
            "       (select count(course_id) from videos where videos.course_id = courses.id) as numOfVideo " +
            "FROM courses " +
            "         LEFT JOIN comments ON courses.id = comments.course_id " +
            "WHERE courses.id = :courseId " +
            "GROUP BY courses.id ")
    CourseProjection findCourseRelatedInfoByCourseId(@Param("courseId") Long id);



}
