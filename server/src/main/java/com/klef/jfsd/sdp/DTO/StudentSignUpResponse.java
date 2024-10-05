package com.klef.jfsd.sdp.DTO;

public class StudentSignUpResponse {
    private String message;
    private String fname;
    private String lname;
    private String email;

    public StudentSignUpResponse(String message, String fname, String lname, String email) {
        this.message = message;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
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
}
