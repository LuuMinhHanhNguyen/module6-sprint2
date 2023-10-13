package com.example.backend.repository;

import com.example.backend.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IVideoRepository extends JpaRepository<Video, Long> {

    List<Video> findAllByCourse_Id(Long courseId);
}
