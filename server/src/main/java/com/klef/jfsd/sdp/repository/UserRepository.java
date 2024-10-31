package com.klef.jfsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.jfsd.sdp.models.Role;
import com.klef.jfsd.sdp.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUsernameOrEmailAndPassword(String usernameOrEmail, String usernameOrEmail2, String password);

	User findByUsernameOrEmail(String usernameOrEmail, String usernameOrEmail2);

	User findByUsername(String username);
   
}