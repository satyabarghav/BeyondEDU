package com.klef.jfsd.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.klef.jfsd.sdp.DTO.AdminLoginRequest;
import com.klef.jfsd.sdp.DTO.AdminLoginResponse;
import com.klef.jfsd.sdp.DTO.AdminSignUpRequest;
import com.klef.jfsd.sdp.DTO.AdminSignUpResponse;
import com.klef.jfsd.sdp.models.Admin;
import com.klef.jfsd.sdp.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder; 
	
	@Override
	public AdminLoginResponse login(AdminLoginRequest adminLoginRequest) {
	    Admin admin;

	    // Check if the input is an email or username
	    if (adminLoginRequest.getUsernameOrEmail().contains("@")) {
	        admin = adminRepository.findByEmail(adminLoginRequest.getUsernameOrEmail());
	    } else {
	        admin = adminRepository.findByUsername(adminLoginRequest.getUsernameOrEmail());
	    }

	    if (admin == null) {
	        throw new RuntimeException("Invalid credentials");
	    }

	    // Check if the provided password matches the stored password
	    if (!passwordEncoder.matches(adminLoginRequest.getPassword(), admin.getPassword())) {
	        throw new RuntimeException("Invalid credentials");
	    }

	    // Return the response DTO with necessary details
	    return new AdminLoginResponse(admin.getName(), admin.getUsername(), admin.getEmail());
	}
	
	@Override
	public AdminSignUpResponse registerAdmin(AdminSignUpRequest adminSignUpRequest) {
	    Admin admin = new Admin();
	    admin.setName(adminSignUpRequest.getName());
	    admin.setEmail(adminSignUpRequest.getEmail());
	    admin.setUsername(adminSignUpRequest.getUsername()); // Set username
	    String hashedPassword = passwordEncoder.encode(adminSignUpRequest.getPassword());
	    admin.setPassword(hashedPassword);

	    // Save admin entity to database
	    adminRepository.save(admin);

	    // Create and return response
	    return new AdminSignUpResponse("Admin signup successful!", admin.getName(), admin.getEmail(), admin.getUsername());
	}

}
