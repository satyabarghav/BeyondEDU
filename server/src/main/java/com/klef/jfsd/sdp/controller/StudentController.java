package com.klef.jfsd.sdp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.jfsd.sdp.DTO.StudentSignUpRequest;
import com.klef.jfsd.sdp.DTO.StudentSignUpResponse;
import com.klef.jfsd.sdp.service.StudentService;

@RestController
@RequestMapping("/api/student")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/signup")
	private ResponseEntity<StudentSignUpResponse> signup(@RequestBody StudentSignUpRequest request){
		
		StudentSignUpResponse response = studentService.register(request);
		
		return ResponseEntity.ok(response);
	}
}
