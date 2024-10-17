package com.klef.jfsd.sdp.service;

import com.klef.jfsd.sdp.DTO.TeacherLoginRequest;
import com.klef.jfsd.sdp.DTO.TeacherLoginResponse;
import com.klef.jfsd.sdp.DTO.TeacherSignUpRequest;
import com.klef.jfsd.sdp.DTO.TeacherSignUpResponse;

public interface TeacherService {
    TeacherLoginResponse login(TeacherLoginRequest teacherLoginRequest);
    public TeacherSignUpResponse register(TeacherSignUpRequest teacherSignUpRequest);
}
