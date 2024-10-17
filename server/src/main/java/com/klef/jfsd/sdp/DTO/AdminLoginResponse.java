package com.klef.jfsd.sdp.DTO;

public class AdminLoginResponse {
    private String name;
    private String username;
    private String email;

    // Constructor
    public AdminLoginResponse(String name, String username, String email) {
        this.name = name;
        this.username = username;
        this.email = email;
    }

    // Getters
    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }
}
