package com.mindsprint.RestAPI.repo;

import com.mindsprint.RestAPI.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Long> {
    public Student findByEmail(String email);
}
