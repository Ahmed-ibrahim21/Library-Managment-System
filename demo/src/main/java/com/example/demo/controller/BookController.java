package com.example.demo.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Book;
import com.example.demo.service.BookSrevice;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RequestMapping("/Book")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired
    BookSrevice service;

    @PostMapping("/add")
    public boolean AddBook(@RequestBody Book book){
        return service.AddBook(book);
    }

    @GetMapping("/Read")
    public List <Book> getBooks() {
       return service.getBooks();
    }
    
    @PutMapping("Update/{isbn}")
    public boolean UpdateBook(@PathVariable Integer isbn,@RequestBody Book book) {
      return  service.updateBook(isbn,book);
    }

   @PutMapping("Delete/{isbn}")
   public boolean DeleteBook(@PathVariable Integer isbn) {
    return   service.DeleteBook(isbn);
   }
}
