package com.klef.jfsd.sdp.models;

import java.time.LocalDateTime;
import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "student_table")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50)
    private String fname;

    @Column(nullable = false, length = 50)
    private String lname;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, length = 50)
    private String department;

    @Column(nullable = false)
    private int yearOfStudy;

    @OneToMany(mappedBy = "student")
    private List<Achievement> achievements;

    @Column(nullable = false)
    private String dob;

    @Column(length = 15, nullable = false,unique = true)
    private String contact;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private LocalDateTime registrationDate;

    // Getters and Setters

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getFname() { return fname; }
    public void setFname(String fname) { this.fname = fname; }

    public String getLname() { return lname; }
    public void setLname(String lname) { this.lname = lname; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public int getYearOfStudy() { return yearOfStudy; }
    public void setYearOfStudy(int yearOfStudy) { this.yearOfStudy = yearOfStudy; }

    public List<Achievement> getAchievements() { return achievements; }
    public void setAchievements(List<Achievement> achievements) { this.achievements = achievements; }

    public String getDob() { return dob; }
    public void setDob(String dob) { this.dob = dob; }

    public String getContact() { return contact; }
    public void setContact(String contact) { this.contact = contact; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public LocalDateTime getRegistrationDate() { return registrationDate; }
    public void setRegistrationDate(LocalDateTime registrationDate) { this.registrationDate = registrationDate; }

    // ToString method
    @Override
    public String toString() {
        return "Student [id=" + id + ", fname=" + fname + ", lname=" + lname + ", email=" + email + 
               ", password=" + password + ", department=" + department + ", yearOfStudy=" + yearOfStudy + 
               ", dob=" + dob + ", contact=" + contact + ", address=" + address + ", registrationDate=" + registrationDate + "]";
    }
}
