package com.klef.jfsd.sdp.service;

import com.klef.jfsd.sdp.DTO.AdminLoginRequest;
import com.klef.jfsd.sdp.DTO.AdminLoginResponse;
import com.klef.jfsd.sdp.DTO.AdminSignUpRequest;
import com.klef.jfsd.sdp.DTO.AdminSignUpResponse;

public interface AdminService {
	public AdminLoginResponse login(AdminLoginRequest adminLoginRequest);
	public AdminSignUpResponse registerAdmin(AdminSignUpRequest adminSignUpRequest);
}
