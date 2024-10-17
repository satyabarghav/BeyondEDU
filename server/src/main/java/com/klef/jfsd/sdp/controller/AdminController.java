package com.klef.jfsd.sdp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.jfsd.sdp.DTO.AdminLoginRequest;
import com.klef.jfsd.sdp.DTO.AdminLoginResponse;
import com.klef.jfsd.sdp.DTO.AdminSignUpRequest;
import com.klef.jfsd.sdp.DTO.AdminSignUpResponse;
import com.klef.jfsd.sdp.service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Admin login endpoint
    @PostMapping("/login")
    public ResponseEntity<AdminLoginResponse> login(@RequestBody AdminLoginRequest adminLoginRequest) {
        AdminLoginResponse loginResponse = adminService.login(adminLoginRequest);
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/register")
    public ResponseEntity<AdminSignUpResponse> registerAdmin(@RequestBody AdminSignUpRequest adminRegisterRequest) {
        AdminSignUpResponse registerResponse = adminService.registerAdmin(adminRegisterRequest);
        return ResponseEntity.ok(registerResponse);
    }

}
