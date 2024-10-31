package com.klef.jfsd.sdp.DTO;

public class StudentSignUpRequest {
    private String fname;  // First name
    private String lname;  // Last name
    private String email;
    private String username;  // Username field
    private String password;
    private String department;
    private int yearOfStudy;
    private String dob;
    private String contact;
    private String address;

    // Getters and Setters

    public String getFname() {
        return fname; // Getter for first name
    }

    public void setFname(String fname) {
        this.fname = fname; // Setter for first name
    }

    public String getLname() {
        return lname; // Getter for last name
    }

    public void setLname(String lname) {
        this.lname = lname; // Setter for last name
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public int getYearOfStudy() {
        return yearOfStudy;
    }

    public void setYearOfStudy(int yearOfStudy) {
        this.yearOfStudy = yearOfStudy;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
