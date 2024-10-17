package com.klef.jfsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.jfsd.sdp.models.Student;

public interface StudentRepository extends JpaRepository<Student, java.lang.Integer> {

	Student findByEmail(String email);

	Student findByUsername(String username);
	
}
