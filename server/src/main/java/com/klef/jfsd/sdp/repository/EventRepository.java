package com.klef.jfsd.sdp.repository;

import com.klef.jfsd.sdp.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    List<Event> findByEventType(String eventType);
    List<Event> findByClassification(String classification);
}
