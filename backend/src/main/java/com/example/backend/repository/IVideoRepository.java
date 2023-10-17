package com.example.backend.repository;

import com.example.backend.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IVideoRepository extends JpaRepository<Video, Long> {

    List<Video> findAllByCourse_Id(Long courseId);
}
