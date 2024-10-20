package com.klef.jfsd.sdp.DTO;

public class TeacherLoginResponse {
    private String name;
    private String email;
    private String username;
    private String role;
    private int yearsOfExperience;

    public TeacherLoginResponse(String name, String email, String username, String role, int yearsOfExperience) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.role = role;
        this.yearsOfExperience = yearsOfExperience;
    }

    // Getters
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getUsername() { return username; }
    public String getRole() { return role; }
    public int getYearsOfExperience() { return yearsOfExperience; }
}
