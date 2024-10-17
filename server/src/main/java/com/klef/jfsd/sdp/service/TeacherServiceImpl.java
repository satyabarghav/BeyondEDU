package com.klef.jfsd.sdp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.klef.jfsd.sdp.DTO.TeacherLoginRequest;
import com.klef.jfsd.sdp.DTO.TeacherLoginResponse;
import com.klef.jfsd.sdp.DTO.TeacherSignUpRequest;
import com.klef.jfsd.sdp.DTO.TeacherSignUpResponse;
import com.klef.jfsd.sdp.models.Teacher;
import com.klef.jfsd.sdp.repository.TeacherRepository;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public TeacherSignUpResponse register(TeacherSignUpRequest teacherSignUpRequest) {
        Teacher teacher = new Teacher();
        teacher.setName(teacherSignUpRequest.getName());
        teacher.setEmail(teacherSignUpRequest.getEmail());
        teacher.setUsername(teacherSignUpRequest.getUsername());

        String hashedPassword = passwordEncoder.encode(teacherSignUpRequest.getPassword());
        teacher.setPassword(hashedPassword);

        teacher.setRole(teacherSignUpRequest.getRole());
        teacher.setYearsOfExperience(teacherSignUpRequest.getYearsOfExperience());

        teacherRepository.save(teacher);

        return new TeacherSignUpResponse("Teacher registered successfully", teacher.getName(), teacher.getEmail(),
                teacher.getUsername(), teacher.getRole());
    }
    
    @Override
    public TeacherLoginResponse login(TeacherLoginRequest teacherLoginRequest) {
        Teacher teacher = teacherRepository.findByUsernameOrEmail(teacherLoginRequest.getUsernameOrEmail(),
                teacherLoginRequest.getUsernameOrEmail());

        if (teacher == null) {
            throw new RuntimeException("Invalid credentials"); // Teacher not found
        }

        // Check if the provided password matches the stored password
        if (!passwordEncoder.matches(teacherLoginRequest.getPassword(), teacher.getPassword())) {
            throw new RuntimeException("Invalid credentials"); // Password mismatch
        }

        // Convert Teacher entity to TeacherLoginResponse (excluding password)
        return new TeacherLoginResponse(teacher.getName(), teacher.getEmail(), teacher.getUsername(),
                teacher.getRole(), teacher.getYearsOfExperience());
    }


}
