package com.mindsprint.RestAPI.repo;

import com.mindsprint.RestAPI.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Long> {
}
