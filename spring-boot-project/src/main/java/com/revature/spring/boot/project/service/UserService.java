package com.revature.spring.boot.project.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.spring.boot.project.entity.User;
import com.revature.spring.boot.project.repository.UserRepository;



@Service
public class UserService {

    @Autowired
    public UserRepository repository;

    public User addUser(User user){
        return repository.save(user);
    }
    
    public User getUserByNameAndPassword(String username, String password){
    	User user = repository.getUserByUsernameAndPassword(username,password);
    	return user;
    }





}
