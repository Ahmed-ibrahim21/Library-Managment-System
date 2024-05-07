package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.repository.BooksRepository;

@Service
public class BookSrevice {

    @Autowired
    BooksRepository bookRepository;

    public Boolean AddBook(Book book){
        try {
            bookRepository.save(book);
            return true;
           } catch (Exception e) {
            throw e;
           }
        }

        public List <Book> getBooks(){
            try {
                return bookRepository.findAll();
            } catch (Exception e) {
                System.out.println(e);
                return new ArrayList<>();
            }
        }
    
        public boolean updateBook(Integer isbn, Book newBook) {
            Book bookToUpdate = bookRepository.getReferenceById(isbn);
            if (bookToUpdate == null) {
              System.out.println("Book with ISBN " + isbn + " not found.");
              return false;
            }
          
            try {
                bookToUpdate.setTitle(newBook.getTitle());
                bookToUpdate.setAuthor(newBook.getAuthor());
                bookToUpdate.setRack_no(newBook.getRack_no());
                bookToUpdate.setAvl_copies(newBook.getAvl_copies());
                bookRepository.save(bookToUpdate);
                System.out.println("Book updated successfully!");
                return true;

            } catch (Exception e) {
                throw e;
            }
          }
          
          public boolean DeleteBook(Integer isbn){
            try {
                  Book bookToDelete = bookRepository.getReferenceById(isbn);

                 if (bookToDelete == null) {
                  System.out.println("Book with ISBN " + isbn + " not found.");
                 return false;
                    }
                bookRepository.delete(bookToDelete);
                 System.out.println("Book deleted successfully!");
                 return true;
            } catch (Exception e) {
                throw e;
            }
        }
        }
