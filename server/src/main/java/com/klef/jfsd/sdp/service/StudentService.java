package com.klef.jfsd.sdp.service;

import com.klef.jfsd.sdp.DTO.StudentLoginRequest;
import com.klef.jfsd.sdp.DTO.StudentLoginResponse;
import com.klef.jfsd.sdp.DTO.StudentSignUpRequest;
import com.klef.jfsd.sdp.DTO.StudentSignUpResponse;

public interface StudentService {
	public StudentSignUpResponse register(StudentSignUpRequest studentSignUpRequest);
	public StudentLoginResponse login(StudentLoginRequest studentLoginRequest);
	
}
