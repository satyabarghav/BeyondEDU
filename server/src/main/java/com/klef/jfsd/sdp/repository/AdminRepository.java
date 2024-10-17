package com.klef.jfsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.jfsd.sdp.models.Admin;

public interface AdminRepository extends JpaRepository<Admin,java.lang.Integer > {

	Admin findByEmail(String email);

	Admin findByUsername(String username);
	
}
