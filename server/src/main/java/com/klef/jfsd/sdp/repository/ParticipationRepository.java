package com.klef.jfsd.sdp.repository;

import com.klef.jfsd.sdp.models.Participation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ParticipationRepository extends JpaRepository<Participation, Integer> {
    List<Participation> findByStudentId(int studentId);
    List<Participation> findByEventId(int eventId);
    List<Participation> findByStatus(String status);
}
