package com.example.backend.service;

import com.example.backend.model.AppUser;
import com.example.backend.repository.IAppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AppUserService implements IAppUserService{

    @Autowired
    private IAppUserRepository iAppUserRepository;
    @Override
    public AppUser findById(Long id) {
        return iAppUserRepository.findById(id).get();
    }

}
