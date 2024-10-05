package com.klef.jfsd.sdp.models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "participation_table")
public class Participation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @Column(nullable = false, length = 100)
    private String activityName;

    @Column(nullable = false)
    private LocalDate participationDate;

    @Column(nullable = false)
    private boolean completed;  // Whether the activity is completed

    // Getters and Setters

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public Student getStudent() { return student; }
    public void setStudent(Student student) { this.student = student; }

    public String getActivityName() { return activityName; }
    public void setActivityName(String activityName) { this.activityName = activityName; }

    public LocalDate getParticipationDate() { return participationDate; }
    public void setParticipationDate(LocalDate participationDate) { this.participationDate = participationDate; }

    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }

    // ToString method
    @Override
    public String toString() {
        return "Participation [id=" + id + ", student=" + student + ", activityName=" + activityName + 
               ", participationDate=" + participationDate + ", completed=" + completed + "]";
    }
}
