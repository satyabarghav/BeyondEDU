package com.klef.jfsd.sdp.DTO;

public class StudentSignUpResponse {
    private String message;
    private String fname;
    private String lname;
    private String email;
    private String username; // New username field

    public StudentSignUpResponse(String message, String fname, String lname, String email, String username) {
        this.message = message;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.username = username;  // Assign username in constructor
    }

    // Getters
    public String getMessage() {
        return message;
    }

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
