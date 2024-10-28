package com.klef.jfsd.sdp.DTO;

public class TeacherSignUpResponse {
    private String message;
    private String name;
    private String email;
    private String username;

    public TeacherSignUpResponse(String message, String name, String email, String username) {
        this.message = message;
        this.name = name;
        this.email = email;
        this.username = username;
    }

    // Getters
    public String getMessage() { return message; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getUsername() { return username; }
}
