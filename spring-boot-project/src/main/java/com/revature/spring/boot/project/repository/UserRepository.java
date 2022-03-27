package com.revature.spring.boot.project.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.spring.boot.project.entity.User;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	User getUserByUsernameAndPassword(String username, String password);
}
