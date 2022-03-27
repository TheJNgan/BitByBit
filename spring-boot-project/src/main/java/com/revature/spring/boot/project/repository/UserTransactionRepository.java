package com.revature.spring.boot.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.spring.boot.project.entity.UserTransaction;


@Repository
public interface UserTransactionRepository extends CrudRepository<UserTransaction, Long> {
	
}
