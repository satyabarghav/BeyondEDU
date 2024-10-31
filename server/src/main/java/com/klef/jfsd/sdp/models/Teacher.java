package com.klef.jfsd.sdp.models;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "teacher_table")
public class Teacher extends User {

    @Column(nullable = false)
    private int yearsOfExperience;

    @OneToMany(mappedBy = "teacher")
    private List<Achievement> achievementsReviewed;

    // Getters and Setters
    public int getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public List<Achievement> getAchievementsReviewed() {
        return achievementsReviewed;
    }

    public void setAchievementsReviewed(List<Achievement> achievementsReviewed) {
        this.achievementsReviewed = achievementsReviewed;
    }

    @Override
    public String toString() {
        return "Teacher [fname=" + getFname() + ", lname=" + getLname() + 
               ", username=" + getUsername() + ", email=" + getEmail() + 
               ", yearsOfExperience=" + yearsOfExperience + "]";
    }
}
