package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "borrowed_books")
public class Borrowed_books {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "borrow_id", nullable = false)
    private Integer borrow_id;
    @Column(name = "ISBN", nullable = false)
    private Integer ISBN;
    @Column(name = "user_id", nullable = false)
    private Integer user_id;
    @Column(name = "status", nullable = false)
    private Integer status;

}
