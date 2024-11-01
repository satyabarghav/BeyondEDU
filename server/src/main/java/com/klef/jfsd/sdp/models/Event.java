package com.klef.jfsd.sdp.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "event_table")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDateTime eventDate;

    @Column(nullable = false, length = 100)
    private String location;

    @Column(nullable = false)
    private int maxParticipants;  // Maximum strength of participants

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EventType eventType;  // Enum for Event Types (e.g., Sports, Arts, Academic)

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EventClassification classification;  // Enum for Competitive or Non-Competitive

    // One-to-many relationship with Participation
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Participation> participations;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getEventDate() {
        return eventDate;
    }

    public void setEventDate(LocalDateTime eventDate) {
        this.eventDate = eventDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getMaxParticipants() {
        return maxParticipants;
    }

    public void setMaxParticipants(int maxParticipants) {
        this.maxParticipants = maxParticipants;
    }

    public EventType getEventType() {
        return eventType;
    }

    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public EventClassification getClassification() {
        return classification;
    }

    public void setClassification(EventClassification classification) {
        this.classification = classification;
    }

    public List<Participation> getParticipations() {
        return participations;
    }

    public void setParticipations(List<Participation> participations) {
        this.participations = participations;
    }

    @Override
    public String toString() {
        return "Event [id=" + id + ", title=" + title + ", description=" + description + 
               ", eventDate=" + eventDate + ", location=" + location + 
               ", maxParticipants=" + maxParticipants + ", eventType=" + eventType + 
               ", classification=" + classification + ", participations=" + participations + "]";
    }
}
