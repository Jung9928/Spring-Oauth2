package com.example.Spring_Oauth2_Client.repository;

import com.example.Spring_Oauth2_Client.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);
}
