package com.klef.jfsd.sdp.models;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "teacher_table")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, unique = true, length = 100)
    private String email;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role; // Example: "Senior Lecturer"

    @Column(nullable = false)
    private int yearsOfExperience;

    @OneToMany(mappedBy = "teacher")
    private List<Achievement> achievementsReviewed;

    // Getters and Setters

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public int getYearsOfExperience() { return yearsOfExperience; }
    public void setYearsOfExperience(int yearsOfExperience) { this.yearsOfExperience = yearsOfExperience; }

    public List<Achievement> getAchievementsReviewed() { return achievementsReviewed; }
    public void setAchievementsReviewed(List<Achievement> achievementsReviewed) { this.achievementsReviewed = achievementsReviewed; }

    @Override
    public String toString() {
        return "Teacher [id=" + id + ", name=" + name + ", email=" + email + ", username=" + username +
                ", role=" + role + ", yearsOfExperience=" + yearsOfExperience + "]";
    }
}
