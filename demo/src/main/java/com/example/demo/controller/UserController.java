package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginDTO;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RequestMapping("/User")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService service;

    @PostMapping("/register")
    public boolean AddUser(@RequestBody User user){
       return service.addUser(user);
    }

    @PutMapping("/Validate/{user_id}")
    public boolean validateUser(@PathVariable Integer user_id,@RequestBody boolean valid) {
      return  service.validateUser(user_id,valid);
    }

    @GetMapping("/getRegisterRequests")
    public List <User> getRegisterRequests() {
       return service.getRegisterRequests();
    }

    @PutMapping("Delete/{user_id}")
    public boolean deleteUser(@PathVariable Integer user_id) {
     return   service.DeleteUser(user_id);
    }

    @PostMapping("/Login")
    public User postMethodName(@RequestBody LoginDTO login) {
        return service.login(login);
    }
    

}
