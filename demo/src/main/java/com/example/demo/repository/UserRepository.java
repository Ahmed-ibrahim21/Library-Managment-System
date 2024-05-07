package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{

    @Query(value = "SELECT * FROM user WHERE valid = 0",nativeQuery = true)
    List <User> getRegisterRequests();


    @Query(value = "SELECT * FROM user WHERE email = :email AND password = :password", nativeQuery = true)
    public User LoginCheck(@Param("email") String email,@Param("password") String password);

}
