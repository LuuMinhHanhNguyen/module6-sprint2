package com.example.backend.service;

import com.example.backend.model.Video;
import com.example.backend.repository.IVideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService implements IVideoService{

    @Autowired
    private IVideoRepository iVideoRepository;

    @Override
    public List<Video> getAllVideos(Long courseId) {
        return iVideoRepository.findAllByCourse_Id(courseId);
    }
}
