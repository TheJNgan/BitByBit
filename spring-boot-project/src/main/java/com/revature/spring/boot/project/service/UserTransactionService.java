package com.revature.spring.boot.project.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.spring.boot.project.entity.User;
import com.revature.spring.boot.project.entity.UserTransaction;
import com.revature.spring.boot.project.repository.UserRepository;
import com.revature.spring.boot.project.repository.UserTransactionRepository;



@Service
public class UserTransactionService {

    @Autowired
    public UserTransactionRepository repository;
    
    public List<UserTransaction> addAllTransaction(List<UserTransaction> arrTransaction){
    	List<UserTransaction> lstRet = new ArrayList<UserTransaction>();
    	for(UserTransaction tran : arrTransaction) {
    		lstRet.add(addTransaction(tran));
    	}
    	return lstRet;
    }

    public UserTransaction addTransaction(UserTransaction transaction){
        return repository.save(transaction);
    }

}
