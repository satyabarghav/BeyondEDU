package com.klef.jfsd.sdp.DTO;

public class StudentLoginResponse {
    private String fname;      // First name
    private String lname;      // Last name
    private String email;      // Email
    private String username;    // Username

    // Constructor
    public StudentLoginResponse(String fname, String lname, String email, String username) {
        this.fname = fname; 
        this.lname = lname; 
        this.email = email; 
        this.username = username; // Set username in constructor
    }

    // Getters
    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }
}
