package com.klef.jfsd.sdp.DTO;

public class TeacherSignUpResponse {
    private String message;
    private String name;
    private String email;
    private String username;
    private String role;

    public TeacherSignUpResponse(String message, String name, String email, String username, String role) {
        this.message = message;
        this.name = name;
        this.email = email;
        this.username = username;
        this.role = role;
    }

    // Getters
    public String getMessage() { return message; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getUsername() { return username; }
    public String getRole() { return role; }
}
