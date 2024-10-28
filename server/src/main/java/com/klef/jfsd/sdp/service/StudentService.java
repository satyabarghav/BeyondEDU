package com.klef.jfsd.sdp.service;

import com.klef.jfsd.sdp.DTO.StudentSignUpRequest;
import com.klef.jfsd.sdp.DTO.StudentSignUpResponse;

public interface StudentService {
    StudentSignUpResponse registerStudent(StudentSignUpRequest studentSignUpRequest);
    // Add any additional methods specific to Student logic
}
