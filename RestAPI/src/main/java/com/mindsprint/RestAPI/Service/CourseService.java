package com.mindsprint.RestAPI.Service;

import com.mindsprint.RestAPI.models.Course;
import com.mindsprint.RestAPI.models.Student;
import com.mindsprint.RestAPI.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
@Autowired
    private CourseRepo repo;

    public Course addCourse(Course course){
        return repo.save(course);
    }
    public List<Course> getAllCourse(){
        return repo.findAll();
    }
    public Course getCourseById(long id){
        return  repo.findById(id).orElse(null);
    }

    public void deleteCourseById(Long id){
            repo.deleteById(id);
    }

    public Course updateCourseById(Course course ,long id){
        Course oldcourse = getCourseById(id);
        if (oldcourse!=null){
        oldcourse.setTitle(course.getTitle());
        oldcourse.setDescription(course.getDescription());
        oldcourse.setPrice(course.getPrice());
        oldcourse.setImgUrl(course.getImgUrl());
        oldcourse.setDuration(course.getDuration());
        oldcourse.setInstructor(course.getInstructor());
        repo.save(oldcourse);
        }
        return null;
    }
}
