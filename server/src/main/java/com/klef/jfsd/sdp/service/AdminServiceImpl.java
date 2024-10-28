package com.klef.jfsd.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.klef.jfsd.sdp.DTO.AdminSignUpRequest;
import com.klef.jfsd.sdp.DTO.AdminSignUpResponse;
import com.klef.jfsd.sdp.models.Admin;
import com.klef.jfsd.sdp.models.Role;
import com.klef.jfsd.sdp.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public AdminSignUpResponse registerAdmin(AdminSignUpRequest adminSignUpRequest) {
        Admin admin = new Admin();
        admin.setName(adminSignUpRequest.getName());
        admin.setEmail(adminSignUpRequest.getEmail());
        admin.setUsername(adminSignUpRequest.getUsername());

        // Hash the password before saving
        String hashedPassword = passwordEncoder.encode(adminSignUpRequest.getPassword());
        admin.setPassword(hashedPassword);
        admin.setRole(Role.ADMIN);

        // Save admin entity to database
        adminRepository.save(admin);

        // Create and return response
        return new AdminSignUpResponse("Admin registration successful!", admin.getName(), admin.getEmail(), admin.getUsername());
    }
}
