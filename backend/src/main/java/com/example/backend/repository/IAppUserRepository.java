package com.example.backend.repository;

import com.example.backend.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAppUserRepository extends JpaRepository<AppUser, Long> {

    AppUser findAppUsersByUserName(String username);
}
