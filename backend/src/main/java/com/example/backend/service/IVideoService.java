package com.example.backend.service;

import com.example.backend.model.Video;
import com.example.backend.repository.IVideoRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface IVideoService {

    List<Video> getAllVideos(Long courseId);
}
