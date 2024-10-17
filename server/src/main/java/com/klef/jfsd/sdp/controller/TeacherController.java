package com.klef.jfsd.sdp.controller;

import com.klef.jfsd.sdp.DTO.TeacherLoginRequest;
import com.klef.jfsd.sdp.DTO.TeacherLoginResponse;
import com.klef.jfsd.sdp.DTO.TeacherSignUpRequest;
import com.klef.jfsd.sdp.DTO.TeacherSignUpResponse;
import com.klef.jfsd.sdp.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @PostMapping("/register")
    public TeacherSignUpResponse registerTeacher(@RequestBody TeacherSignUpRequest teacherSignUpRequest) {
        return teacherService.register(teacherSignUpRequest);
    }

    @PostMapping("/login")
    public TeacherLoginResponse loginTeacher(@RequestBody TeacherLoginRequest teacherLoginRequest) {
        return teacherService.login(teacherLoginRequest);
    }
}
