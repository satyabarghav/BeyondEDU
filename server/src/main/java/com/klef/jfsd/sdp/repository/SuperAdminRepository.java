package com.klef.jfsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.jfsd.sdp.models.SuperAdmin;

public interface SuperAdminRepository extends JpaRepository<SuperAdmin, Integer> {

	SuperAdmin findByUsername(String username);
	

}
