package com.klef.jfsd.sdp.DTO;

public class AdminSignUpRequest {
    private String name;
    private String email;
    private String username; // Add username field
    private String password;

    // Getters and Setters

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getUsername() { return username; } // Getter for username
    public void setUsername(String username) { this.username = username; } // Setter for username

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
