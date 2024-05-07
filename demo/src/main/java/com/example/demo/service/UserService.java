package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

        public Boolean addUser(User user){
       try {
        userRepository.save(user);
        return true;
       } catch (Exception e) {
        throw e;
       }
    }


            public boolean validateUser(Integer user_id, boolean Valid) {
            User userToValidate = userRepository.getReferenceById(user_id);
            if (userToValidate == null) {
              System.out.println("Book with user_id " + user_id + " not found.");
              return false;
            }
          
            try {
                userToValidate.setValid(Valid);
                userRepository.save(userToValidate);
                System.out.println("User Validated successfully!");
                return true;

            } catch (Exception e) {
                throw e;
            }
          }

         public List <User> getRegisterRequests(){
            try {
                return userRepository.getRegisterRequests();
            } catch (Exception e) {
                return new ArrayList<>();
            }
        }

        public boolean DeleteUser(Integer user_id){
            try {
                User userToDelete = userRepository.getReferenceById(user_id);

               if (userToDelete == null) {
                System.out.println("Book with user_id " + user_id + " not found.");
               return false;
                  }
              userRepository.delete(userToDelete);
               System.out.println("User deleted successfully!");
               return true;
          } catch (Exception e) {
              throw e;
          }

        }


        public User login(LoginDTO login){
            try {
              return  userRepository.LoginCheck(login.getEmail(),login.getPassword());
            } catch (Exception e) {
                System.out.println(e);
                return null;
            }
        }
}
