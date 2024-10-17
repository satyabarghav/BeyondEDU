package com.klef.jfsd.sdp.DTO;

public class AdminSignUpResponse {
    private String message;
    private String name;
    private String email;
    private String username; // Include username in the response

    public AdminSignUpResponse(String message, String name, String email, String username) {
        this.message = message;
        this.name = name;
        this.email = email;
        this.username = username; // Set username in the constructor
    }

    // Getters

    public String getMessage() { return message; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getUsername() { return username; } // Getter for username
}
