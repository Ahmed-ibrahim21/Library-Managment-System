package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginDTO;
import com.example.demo.model.Librarian;
import com.example.demo.repository.LibrarianRepository;

@Service
public class LibrarianService {

    @Autowired
    LibrarianRepository librarianRepository;

    public Boolean addLibrarian(Librarian librarian){
       try {
        librarianRepository.save(librarian);
        return true;
       } catch (Exception e) {
        throw e;
       }
    }

            public Librarian login(LoginDTO login){
            try {
              return librarianRepository.LoginCheck(login.getEmail(),login.getPassword());
            } catch (Exception e) {
                System.out.println(e);
                return null;
            }
        }

}
