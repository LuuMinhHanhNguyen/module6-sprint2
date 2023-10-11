package com.example.backend.auth;

import com.example.backend.auth.AuthenticationRequest;
import com.example.backend.auth.AuthenticationResponse;
import com.example.backend.auth.RegisterRequest;
import com.example.backend.config.JwtTokenUtils;
import com.example.backend.model.AppUser;
import com.example.backend.repository.IAppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthenticationService {

    @Autowired
    private IAppUserRepository iAppUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenUtils jwtTokenUtils;

    @Autowired
    private AuthenticationManager authenticationManager;


    public AuthenticationResponse register(RegisterRequest request) {
        AppUser appUser = new AppUser(false,request.getUserName(),
                passwordEncoder.encode(request.getPassword()), request.getAppRole());
        if( iAppUserRepository.findAppUsersByUserName(request.getUserName()) != null){
            return new AuthenticationResponse(null);
        } else {
            AppUser newAppUser =  iAppUserRepository.save(appUser);
            Map<String, Object> maps = new HashMap<>();
            maps.put("appUser", new AppUser(newAppUser.getId(), newAppUser.getUserName(), newAppUser.getAppRole()));
            String token = jwtTokenUtils.generateToken(maps,appUser);
            return new AuthenticationResponse(token);
        }

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword()));
            AppUser appUser = iAppUserRepository.findAppUsersByUserName(request.getUserName());
            // how to custom payload to contain more details
            Map<String, Object> maps = new HashMap<>();
            maps.put("appUser", new AppUser(appUser.getId(), appUser.getUserName(), appUser.getAppRole()));
            String token = jwtTokenUtils.generateToken(maps,appUser);
            return new AuthenticationResponse(token);
        } catch (Exception e){
           return new AuthenticationResponse(null);
        }
    }
}
