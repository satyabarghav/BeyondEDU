package com.klef.jfsd.sdp.models;

import jakarta.persistence.*;

@Entity
@Table(name = "achievement_table")
public class Achievement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false, length = 255)
    private String credentialUrl;  // Optional URL for credential verification

    @Column(nullable = false)
    private String status;  // PENDING, APPROVED, REJECTED

    @Column(length = 500)
    private String feedback;  // Feedback from the teacher or admin

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;  // Reference to the Teacher who approved the achievement

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;  // Reference to the event associated with this achievement

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCredentialUrl() { return credentialUrl; }
    public void setCredentialUrl(String credentialUrl) { this.credentialUrl = credentialUrl; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getFeedback() { return feedback; }
    public void setFeedback(String feedback) { this.feedback = feedback; }

    public Student getStudent() { return student; }
    public void setStudent(Student student) { this.student = student; }

    public Teacher getTeacher() { return teacher; }
    public void setTeacher(Teacher teacher) { this.teacher = teacher; }

    public Event getEvent() { return event; }
    public void setEvent(Event event) { this.event = event; }

    @Override
    public String toString() {
        return "Achievement [id=" + id + ", title=" + title + ", description=" + description + 
               ", credentialUrl=" + credentialUrl + ", status=" + status + ", feedback=" + feedback + 
               ", student=" + student + ", teacher=" + teacher + ", event=" + event + "]";
    }
}
