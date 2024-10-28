package com.klef.jfsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klef.jfsd.sdp.models.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, java.lang.Integer> {
	Teacher findByUsernameOrEmail(String username, String email);

	Teacher findByUsername(String username);
}
