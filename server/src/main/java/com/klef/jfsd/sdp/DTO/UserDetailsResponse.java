package com.klef.jfsd.sdp.DTO;

public class UserDetailsResponse {
    private String firstName;   // First name
    private String lastName;    // Last name
    private String email;       // Email
    private String username;    // Username
    private String role;        // User role (Admin/Student/Teacher)
    private String token;

    public UserDetailsResponse(String firstName, String lastName, String username, String email, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.role = role;
    }

    // Getters
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getRole() {
        return role;
    }
    
    public String getToken() {
    	return token;
    }
    
    public void setToken(String token) {
    	this.token = token;
    }
}
