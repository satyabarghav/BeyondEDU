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

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;  

    @Column(nullable = false)
    private LocalDate participationDate;

    @Column(nullable = false)
    private String status;  

    // Getters and Setters

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public Student getStudent() { return student; }
    public void setStudent(Student student) { this.student = student; }

    public Event getEvent() { return event; }
    public void setEvent(Event event) { this.event = event; }

    public LocalDate getParticipationDate() { return participationDate; }
    public void setParticipationDate(LocalDate participationDate) { this.participationDate = participationDate; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    // ToString method
    @Override
    public String toString() {
        return "Participation [id=" + id + ", student=" + student + ", event=" + event + 
               ", participationDate=" + participationDate + ", status=" + status + "]";
    }
}
