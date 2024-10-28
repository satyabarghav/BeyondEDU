package com.klef.jfsd.sdp.service;

import com.klef.jfsd.sdp.DTO.AdminSignUpRequest;
import com.klef.jfsd.sdp.DTO.AdminSignUpResponse;

public interface AdminService {
    AdminSignUpResponse registerAdmin(AdminSignUpRequest adminSignUpRequest);
    // Add any additional methods specific to Admin logic
}
