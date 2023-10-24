package com.example.backend.repository;

import com.example.backend.model.Course;
import com.example.backend.projection.CourseProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

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


    @Query(nativeQuery = true, value = " SELECT distinct courses.* FROM courses " +
            " JOIN course_type ON courses.course_type_id = course_type.id " +
            " JOIN videos ON courses.id = videos.course_id " +
            "WHERE course_type.name LIKE %:searchInfo% " +
            "OR videos.title LIKE %:searchInfo% " +
            "OR courses.description LIKE %:searchInfo% ")
    List<Course> searchCourses(@Param("searchInfo") String searchInfo);


    @Query(nativeQuery = true, value = "SELECT * FROM (select sub.id,sub.name, sub.image,sub.description," +
            "sub.price, sub.app_user_id, sub.course_type_id, avg_rating, numOfRating  " +
            "from (SELECT c.* , AVG(com.rating) as avg_rating, COUNT(com.rating) as numOfRating " +
            "                     FROM courses c " +
            "                              JOIN app_user au ON c.app_user_id = au.id " +
            "                              JOIN course_type ct ON c.course_type_id = ct.id " +
            "                              JOIN videos v ON v.course_id = c.id " +
            "                              LEFT JOIN comments com ON com.course_id = c.id " +
            "                     WHERE (c.name LIKE CONCAT('%', :searchInfo, '%') " +
            "                         OR c.description LIKE CONCAT('%', :searchInfo, '%') " +
            "                         OR au.user_name LIKE CONCAT('%', :searchInfo, '%') " +
            "                         OR v.title LIKE CONCAT('%', :searchInfo, '%')) " +
            "                       AND FIND_IN_SET(ct.id, :topics) " +
            "                       AND (c.price BETWEEN :priceStart AND :priceEnd) " +
            "                     GROUP BY c.id " +
            "                     HAVING (:numOfRating = -1 OR (avg_rating >= :numOfRating " +
            "   AND avg_rating < :numOfRating + 1))) as sub) as finalSub" +
            " ORDER BY CASE WHEN :sortBy = 'newest' THEN finalSub.id" +
            "               WHEN :sortBy = 'rate' THEN finalSub.avg_rating" +
            "               WHEN :sortBy = 'review' THEN finalSub.numOfRating" +
            "          END DESC")
    List<Course> searchAllCourses(@Param("searchInfo") String searchInfo, @Param("numOfRating") int numOfRating,
                                  @Param("topics") String topics,
                                  @Param("priceStart") double priceStart, @Param("priceEnd") double priceEnd,
                                  @Param("sortBy") String sortBy);




}
