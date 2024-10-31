package com.klef.jfsd.sdp.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.klef.jfsd.sdp.DTO.StudentSignUpRequest;
import com.klef.jfsd.sdp.DTO.StudentSignUpResponse;
import com.klef.jfsd.sdp.models.Role;
import com.klef.jfsd.sdp.models.Student;
import com.klef.jfsd.sdp.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public StudentSignUpResponse registerStudent(StudentSignUpRequest studentSignUpRequest) {
        Student student = new Student();
        student.setFname(studentSignUpRequest.getFname());
        student.setLname(studentSignUpRequest.getLname());
        student.setEmail(studentSignUpRequest.getEmail());
        student.setUsername(studentSignUpRequest.getUsername());

        // Hash the password before saving
        String hashedPassword = passwordEncoder.encode(studentSignUpRequest.getPassword());
        student.setPassword(hashedPassword);

        // Additional student-specific fields
        student.setDepartment(studentSignUpRequest.getDepartment());
        student.setYearOfStudy(studentSignUpRequest.getYearOfStudy());
        student.setDob(studentSignUpRequest.getDob());
        student.setContact(studentSignUpRequest.getContact());
        student.setAddress(studentSignUpRequest.getAddress());
        student.setRegistrationDate(LocalDateTime.now());
        student.setRole(Role.STUDENT);

        // Save student entity to database
        studentRepository.save(student);

        // Create and return response
        return new StudentSignUpResponse("Student registration successful!",student.getFname(),student.getLname(), student.getEmail(), student.getUsername());
    }
    
}
