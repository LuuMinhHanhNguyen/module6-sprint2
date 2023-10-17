package com.example.backend.service;

import com.example.backend.model.AppUser;
import org.springframework.security.core.userdetails.UserDetails;

public interface IAppUserService {

    AppUser findById(Long id);
}
