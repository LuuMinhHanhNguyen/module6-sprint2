package com.example.backend.service;

import com.example.backend.auth.AuthenticationResponse;
import com.example.backend.model.AppUser;

import com.example.backend.repository.IAppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class AppUserService implements IAppUserService{

//    @Autowired
//    private IAppUserRepository iAppUserRepository;

//    @Override
//    public UserDetails loadUserByUsername(String username) {
//        AppUser appUser = iAppUserRepository.findAppUsersByUserName(username);
//
//        if (appUser == null) {
//            throw new UsernameNotFoundException("User name or password is wrong!");
//        }
//
//        List<GrantedAuthority> grantList = new ArrayList<>();
//        grantList.add(new SimpleGrantedAuthority(appUser.getAppRole().getName()));
//
//        UserDetails userDetails = new AuthenticationResponse(
//                appUser.getUserName(),
//                appUser.getPassword(),
//                grantList);
//        return userDetails;
//    }
}
