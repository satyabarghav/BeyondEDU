package com.klef.jfsd.sdp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.jfsd.sdp.DTO.AdminSignUpRequest;
import com.klef.jfsd.sdp.DTO.AdminSignUpResponse;
import com.klef.jfsd.sdp.service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Admin registration endpoint
    @PostMapping("/register")
    public ResponseEntity<AdminSignUpResponse> registerAdmin(@RequestBody AdminSignUpRequest adminSignUpRequest) {
        AdminSignUpResponse response = adminService.registerAdmin(adminSignUpRequest);
        return ResponseEntity.ok(response);
    }
}
