package com.klef.jfsd.sdp.DTO;

public class StudentLoginResponse {
    private String fname;
    private String lname;
    private String email;
    private String department;
    private int yearOfStudy;
    private String dob;
    private String contact;
    private String address;
    private String username; // New field for username

    // Constructor
    public StudentLoginResponse(String fname, String lname, String email, String department, int yearOfStudy, String dob, 
                                String contact, String address, String username) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.department = department;
        this.yearOfStudy = yearOfStudy;
        this.dob = dob;
        this.contact = contact;
        this.address = address;
        this.username = username; // Set username in constructor
    }

    // Getters and setters
    public String getFname() { return fname; }
    public void setFname(String fname) { this.fname = fname; }

    public String getLname() { return lname; }
    public void setLname(String lname) { this.lname = lname; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public int getYearOfStudy() { return yearOfStudy; }
    public void setYearOfStudy(int yearOfStudy) { this.yearOfStudy = yearOfStudy; }

    public String getDob() { return dob; }
    public void setDob(String dob) { this.dob = dob; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getUsername() { return username; } // Getter for username
    public void setUsername(String username) { this.username = username; } // Setter for username
}
