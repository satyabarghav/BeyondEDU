package com.klef.jfsd.sdp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.jfsd.sdp.DTO.TeacherSignUpRequest;
import com.klef.jfsd.sdp.DTO.TeacherSignUpResponse;
import com.klef.jfsd.sdp.service.TeacherService;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    // Teacher registration endpoint
    @PostMapping("/register")
    public ResponseEntity<TeacherSignUpResponse> registerTeacher(@RequestBody TeacherSignUpRequest teacherSignUpRequest) {
        TeacherSignUpResponse response = teacherService.registerTeacher(teacherSignUpRequest);
        return ResponseEntity.ok(response);
    }
}
