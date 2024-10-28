package com.klef.jfsd.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.klef.jfsd.sdp.DTO.TeacherSignUpRequest;
import com.klef.jfsd.sdp.DTO.TeacherSignUpResponse;
import com.klef.jfsd.sdp.models.Role;
import com.klef.jfsd.sdp.models.Teacher;
import com.klef.jfsd.sdp.repository.TeacherRepository;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public TeacherSignUpResponse registerTeacher(TeacherSignUpRequest teacherSignUpRequest) {
        Teacher teacher = new Teacher();
        teacher.setName(teacherSignUpRequest.getName());
        teacher.setEmail(teacherSignUpRequest.getEmail());
        teacher.setUsername(teacherSignUpRequest.getUsername());

        // Hash the password before saving
        String hashedPassword = passwordEncoder.encode(teacherSignUpRequest.getPassword());
        teacher.setPassword(hashedPassword);
        teacher.setRole(Role.TEACHER);

        // Additional teacher-specific fields
        teacher.setYearsOfExperience(teacherSignUpRequest.getYearsOfExperience());

        // Save teacher entity to database
        teacherRepository.save(teacher);

        // Create and return response
        return new TeacherSignUpResponse("Teacher registration successful!", teacher.getName(), teacher.getEmail(), teacher.getUsername());
    }
}
