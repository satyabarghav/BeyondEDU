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

    @Column(nullable = false)
    private String password;

    @OneToMany(mappedBy = "teacher")
    private List<Achievement> achievementsReviewed;

    // Getters and Setters

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public List<Achievement> getAchievementsReviewed() { return achievementsReviewed; }
    public void setAchievementsReviewed(List<Achievement> achievementsReviewed) { this.achievementsReviewed = achievementsReviewed; }

    // ToString method
    @Override
    public String toString() {
        return "Teacher [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + "]";
    }
}
