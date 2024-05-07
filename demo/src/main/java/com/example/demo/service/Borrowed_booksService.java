package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.model.Book;
import com.example.demo.model.Borrowed_books;
import com.example.demo.repository.BooksRepository;
import com.example.demo.repository.Borrowed_booksRepository;

@Service
public class Borrowed_booksService {

    @Autowired
    Borrowed_booksRepository borrowed_booksRepository;

    @Autowired
    BooksRepository bookRepository;


    @CrossOrigin(origins = "http://localhost:3000", methods = RequestMethod.POST)
    public boolean MakeBorrowRequest(Borrowed_books borrowRequest){
        try {
            borrowed_booksRepository.save(borrowRequest);
            return true;
        } catch (Exception e) {
            throw e;
        }
    }

    public List <Borrowed_books> getBorrowed_books(){
        try {
            return borrowed_booksRepository.findAll();
        } catch (Exception e) {
            System.out.println(e);
            return new ArrayList<>();
        }
    }

    public List <Borrowed_books> getPendingBorrowRequests(){
        try {
            return borrowed_booksRepository.getPendingBorrowRequests();
        } catch (Exception e) {
            System.out.println(e);
            return new ArrayList<>();
        }
    }

    public boolean handleBorrowRequest(Integer borrow_id,Integer status){
        try {
            if(status == 1){
            Borrowed_books theRequest = borrowed_booksRepository.getReferenceById(borrow_id);
            theRequest.setStatus(status);
            borrowed_booksRepository.save(theRequest);
            Book book = bookRepository.getReferenceById(theRequest.getISBN());
            book.setAvl_copies(book.getAvl_copies() - 1);
            bookRepository.save(book);
            return true;}
            else if(status == 3){
                Borrowed_books theRequest = borrowed_booksRepository.getReferenceById(borrow_id);
                borrowed_booksRepository.delete(theRequest);
                Book book = bookRepository.getReferenceById(theRequest.getISBN());
                book.setAvl_copies(book.getAvl_copies() + 1);
                bookRepository.save(book);
                return true;      
            }
            else{
            Borrowed_books theRequest = borrowed_booksRepository.getReferenceById(borrow_id);
            theRequest.setStatus(status);
            borrowed_booksRepository.save(theRequest);
                return true;
            }
        } catch (Exception e) {
            throw e;
        }
    }

    public List <Borrowed_books> getUserBooks(Integer user_id){
        try {
            return borrowed_booksRepository.getUserBooks(user_id);
        } catch (Exception e) {
            System.out.println(e);
            return new ArrayList<>();
        }
    }
}
