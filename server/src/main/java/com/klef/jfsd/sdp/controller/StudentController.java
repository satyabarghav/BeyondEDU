package com.klef.jfsd.sdp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.jfsd.sdp.DTO.StudentSignUpRequest;
import com.klef.jfsd.sdp.DTO.StudentSignUpResponse;
import com.klef.jfsd.sdp.service.StudentService;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    // Student registration endpoint
    @PostMapping("/register")
    public ResponseEntity<StudentSignUpResponse> registerStudent(@RequestBody StudentSignUpRequest studentSignUpRequest) {
        StudentSignUpResponse response = studentService.registerStudent(studentSignUpRequest);
        return ResponseEntity.ok(response);
    }
}
