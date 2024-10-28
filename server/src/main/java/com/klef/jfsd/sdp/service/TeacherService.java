package com.klef.jfsd.sdp.service;

import com.klef.jfsd.sdp.DTO.TeacherSignUpRequest;
import com.klef.jfsd.sdp.DTO.TeacherSignUpResponse;

public interface TeacherService {
    TeacherSignUpResponse registerTeacher(TeacherSignUpRequest teacherSignUpRequest);
    // Add any additional methods specific to Teacher logic
}
