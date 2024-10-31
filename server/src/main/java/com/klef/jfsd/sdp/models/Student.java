package com.klef.jfsd.sdp.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "student_table")
public class Student extends User {

    @Column(nullable = false, length = 50)
    private String department;

    @Column(nullable = false)
    private int yearOfStudy;

    @OneToMany(mappedBy = "student")
    private List<Achievement> achievements;

    @Column(nullable = false)
    private String dob;

    @Column(length = 15, nullable = false, unique = true)
    private String contact;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private LocalDateTime registrationDate;

    // Getters and Setters
    
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

    public List<Achievement> getAchievements() {
        return achievements;
    }

    public void setAchievements(List<Achievement> achievements) {
        this.achievements = achievements;
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

    public LocalDateTime getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDateTime registrationDate) {
        this.registrationDate = registrationDate;
    }

    @Override
    public String toString() {
        return "Student [fname=" + getFname() + ", lname=" + getLname() + 
               ", department=" + department + ", yearOfStudy=" + yearOfStudy + 
               ", dob=" + dob + ", contact=" + contact + 
               ", address=" + address + ", registrationDate=" + registrationDate + "]";
    }
}
