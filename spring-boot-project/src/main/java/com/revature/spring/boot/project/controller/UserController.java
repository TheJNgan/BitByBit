package com.revature.spring.boot.project.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.spring.boot.project.entity.User;
import com.revature.spring.boot.project.entity.UserTransaction;
import com.revature.spring.boot.project.service.UserService;
import com.revature.spring.boot.project.service.UserTransactionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService service;
    
    @Autowired
    private UserTransactionService tranService;

    @PostMapping("/createUser")
    public User addUser(@RequestBody User user){
        return service.addUser(user);
    }
    
    @PostMapping("/getUser")
    public User getUser(@RequestBody User userParam){
        User user = service.getUserByNameAndPassword(userParam.getUsername(),userParam.getPassword());
        //System.out.println(user.getUsername());
        return user;
    }
    
    @PostMapping("/createTransactions")
    public List<UserTransaction> createTransactions(@RequestBody List<UserTransaction> arrTransaction){
        return tranService.addAllTransaction(arrTransaction);
    }


}



