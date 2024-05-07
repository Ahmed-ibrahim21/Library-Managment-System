package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.example.demo.model.Borrowed_books;
import com.example.demo.service.Borrowed_booksService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RequestMapping("/borrow")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Borrowed_booksController {

    @Autowired
    Borrowed_booksService service;

    @GetMapping("/getBorrowRequests")
    public List <Borrowed_books> getAllBorrowData() {
        return service.getBorrowed_books();
    }


    @GetMapping("/getPendingBorrowRequests")
    public List <Borrowed_books> getPendingBorrowRequests() {
        return service.getPendingBorrowRequests();
    }

    @CrossOrigin(origins = "http://localhost:3000", methods = RequestMethod.POST)
    @PostMapping("/MakeBorrowRequest")
    public boolean MakeBorrowRequest(@RequestBody Borrowed_books request) {
       return service.MakeBorrowRequest(request);
    }
    
    @PutMapping("/respondBorrowRequest/{borrow_id}")
    public boolean handleBorrowRequest(@PathVariable Integer borrow_id,@RequestBody Integer status) {
       return service.handleBorrowRequest(borrow_id, status);
    }
    

    @PostMapping("/getUserBooks")
    public List <Borrowed_books> getUserBooks(@RequestBody Integer user_id) {
        return service.getUserBooks(user_id);
    }
    
}
