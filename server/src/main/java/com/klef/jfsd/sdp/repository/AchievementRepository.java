package com.klef.jfsd.sdp.repository;

import com.klef.jfsd.sdp.models.Achievement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AchievementRepository extends JpaRepository<Achievement, Integer> {
    List<Achievement> findByStudentId(int studentId);
    List<Achievement> findByStatus(String status);
}
