package com.example.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginDTO;
import com.example.demo.model.Librarian;
import com.example.demo.service.LibrarianService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RequestMapping("/Librarian")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LibrarianController {

    @Autowired
    LibrarianService service;
    
    @PostMapping("/add")
    public boolean AddLibraraian(@RequestBody Librarian librarian){
       return service.addLibrarian(librarian);
    }

    @PostMapping("/Login")
    public Librarian Login(@RequestBody LoginDTO login) {
        return service.login(login);
    }

}
