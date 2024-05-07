package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Librarian;

public interface LibrarianRepository extends JpaRepository<Librarian,Integer>  {

    @Query(value = "SELECT * FROM librarian WHERE email = :email AND password = :password", nativeQuery = true)
    public Librarian LoginCheck(@Param("email") String email,@Param("password") String password);

}
