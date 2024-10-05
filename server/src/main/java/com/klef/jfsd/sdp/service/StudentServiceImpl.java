package com.klef.jfsd.sdp.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.jfsd.sdp.DTO.StudentSignUpRequest;
import com.klef.jfsd.sdp.DTO.StudentSignUpResponse;
import com.klef.jfsd.sdp.models.Student;
import com.klef.jfsd.sdp.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{
	
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public StudentSignUpResponse register(StudentSignUpRequest studentSignUpRequest) {
		 Student student = new Student();
	        student.setFname(studentSignUpRequest.getFname());
	        student.setLname(studentSignUpRequest.getLname());
	        student.setEmail(studentSignUpRequest.getEmail());
	        student.setPassword(studentSignUpRequest.getPassword());
	        student.setDepartment(studentSignUpRequest.getDepartment());
	        student.setYearOfStudy(studentSignUpRequest.getYearOfStudy());
	        student.setDob(studentSignUpRequest.getDob());
	        student.setContact(studentSignUpRequest.getContact());
	        student.setAddress(studentSignUpRequest.getAddress());

	        student.setRegistrationDate(LocalDateTime.now());
	        // Save the student entity to the database
	        studentRepository.save(student);

	        // Create and return the response DTO
	        return new StudentSignUpResponse("Signup successful!", student.getFname(), student.getLname(), student.getEmail());
	}

}
