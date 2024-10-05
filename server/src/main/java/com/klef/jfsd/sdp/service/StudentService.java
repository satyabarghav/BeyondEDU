package com.klef.jfsd.sdp.service;

import com.klef.jfsd.sdp.DTO.StudentSignUpRequest;
import com.klef.jfsd.sdp.DTO.StudentSignUpResponse;

public interface StudentService {
	public StudentSignUpResponse register(StudentSignUpRequest studentSignUpRequest);
	
	
	
}
