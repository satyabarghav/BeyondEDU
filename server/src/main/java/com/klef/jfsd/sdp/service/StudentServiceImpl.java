package com.klef.jfsd.sdp.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.klef.jfsd.sdp.DTO.StudentLoginRequest;
import com.klef.jfsd.sdp.DTO.StudentLoginResponse;
import com.klef.jfsd.sdp.DTO.StudentSignUpRequest;
import com.klef.jfsd.sdp.DTO.StudentSignUpResponse;
import com.klef.jfsd.sdp.models.Student;
import com.klef.jfsd.sdp.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder; // BCrypt encoder injected

	@Override
	public StudentSignUpResponse register(StudentSignUpRequest studentSignUpRequest) {
	    Student student = new Student();
	    student.setFname(studentSignUpRequest.getFname());
	    student.setLname(studentSignUpRequest.getLname());
	    student.setEmail(studentSignUpRequest.getEmail());

	    // Set the username
	    student.setUsername(studentSignUpRequest.getUsername());

	    // Encrypt (hash) the password using BCrypt before saving it
	    String hashedPassword = passwordEncoder.encode(studentSignUpRequest.getPassword());
	    student.setPassword(hashedPassword);

	    student.setDepartment(studentSignUpRequest.getDepartment());
	    student.setYearOfStudy(studentSignUpRequest.getYearOfStudy());
	    student.setDob(studentSignUpRequest.getDob());
	    student.setContact(studentSignUpRequest.getContact());
	    student.setAddress(studentSignUpRequest.getAddress());

	    student.setRegistrationDate(LocalDateTime.now());

	    // Save the student entity to the database
	    studentRepository.save(student);

	    // Create and return the response DTO including the username
	    return new StudentSignUpResponse("Signup successful!", student.getFname(), student.getLname(),
	                                     student.getEmail(), student.getUsername());
	}


	@Override
	public StudentLoginResponse login(StudentLoginRequest studentLoginRequest) {
	    Student student;

	    // Check if the provided input is an email or username
	    if (studentLoginRequest.getEmail().contains("@")) {
	        // Input is an email, find by email
	        student = studentRepository.findByEmail(studentLoginRequest.getEmail());
	    } else {
	        // Input is a username, find by username
	        student = studentRepository.findByUsername(studentLoginRequest.getEmail());
	    }

	    if (student == null) {
	        throw new RuntimeException("Invalid credentials"); // User not found
	    }

	    // Check if the provided password matches the stored password
	    if (!passwordEncoder.matches(studentLoginRequest.getPassword(), student.getPassword())) {
	        throw new RuntimeException("Invalid credentials"); // Password mismatch
	    }

	    // Return StudentLoginResponse with all details including username
	    return new StudentLoginResponse(
	        student.getFname(),
	        student.getLname(),
	        student.getEmail(),
	        student.getDepartment(),
	        student.getYearOfStudy(),
	        student.getDob(),
	        student.getContact(),
	        student.getAddress(),
	        student.getUsername() // Add username to response
	    );
	}

}
