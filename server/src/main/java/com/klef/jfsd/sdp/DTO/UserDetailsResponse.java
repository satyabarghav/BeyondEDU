package com.klef.jfsd.sdp.DTO;

public class UserDetailsResponse {
    private String firstName;
    private String lastName;
    private String email;
    private String department; // Only applicable for students
    private int yearOfStudy; // Only applicable for students
    private String username;
    private String role;

    // Constructor for Admin
    public UserDetailsResponse(String firstName, String username, String email, String role) {
        this.firstName = firstName;
        this.username = username;
        this.email = email;
        this.role = role;
    }

    // Constructor for Student
    public UserDetailsResponse(String firstName, String lastName, String email, String department, int yearOfStudy, String username, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.yearOfStudy = yearOfStudy;
        this.username = username;
        this.role = role;
    }

    // Getters and Setters
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
