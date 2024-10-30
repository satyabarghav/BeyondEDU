package com.klef.jfsd.sdp.service;

import com.klef.jfsd.sdp.DTO.UserDetailsResponse;
import com.klef.jfsd.sdp.models.Admin;
import com.klef.jfsd.sdp.models.Student;
import com.klef.jfsd.sdp.models.Teacher;
import com.klef.jfsd.sdp.models.User;
import com.klef.jfsd.sdp.repository.AdminRepository;
import com.klef.jfsd.sdp.repository.StudentRepository;
import com.klef.jfsd.sdp.repository.TeacherRepository;
import com.klef.jfsd.sdp.repository.UserRepository;
import com.klef.jfsd.sdp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public User authenticateUser(String usernameOrEmail, String password) {
    	 User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail);

         // If user is found, check if the password matches
         if (user != null && passwordEncoder.matches(password, user.getPassword())) {
             return user; // Authentication successful
         }
         return null;
    }

    @Override
    public UserDetailsResponse getUserDetails(User user) {
        if (user == null) {
            return null; // or throw an exception
        }

        // Dynamically retrieve user details based on the role
        switch (user.getRole()) {
            case ADMIN:
                Admin admin = adminRepository.findByUsername(user.getUsername());
                return new UserDetailsResponse(admin.getName(), admin.getUsername(), admin.getEmail(), "ADMIN");

            case STUDENT:
                Student student = studentRepository.findByUsername(user.getUsername());
                if (student != null) {
                    return new UserDetailsResponse(
                        student.getFname(),
                        student.getLname(),
                        student.getEmail(),
                        student.getDepartment(),
                        student.getYearOfStudy(),
                        student.getUsername(),
                        "STUDENT"
                    );
                }
                break;

            case TEACHER:
                Teacher teacher = teacherRepository.findByUsername(user.getUsername());
                if (teacher != null) {
                    return new UserDetailsResponse(
                        teacher.getName(),
                        teacher.getEmail(),
                        teacher.getUsername(),
                        "TEACHER"
                    );
                }
                break;

            default:
                return null; // or throw an exception for unknown role
        }
        return null; // Handle case where no user found for the role
    }
}
