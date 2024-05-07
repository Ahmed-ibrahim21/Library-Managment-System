package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Borrowed_books;

public interface Borrowed_booksRepository extends JpaRepository <Borrowed_books,Integer>{

    @Query(value = "SELECT * FROM borrowed_books WHERE status = 0",nativeQuery = true)
    public List <Borrowed_books> getPendingBorrowRequests();

@Query(value = "SELECT * FROM borrowed_books WHERE status = 1 AND user_id = :user_id", nativeQuery = true)
public List<Borrowed_books> getUserBooks(@Param("user_id") Integer user_id);
}
