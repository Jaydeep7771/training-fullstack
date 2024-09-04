package com.mindsprint.RestAPI.controller;

import com.mindsprint.RestAPI.Service.CourseService;
import com.mindsprint.RestAPI.models.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/course")
public class CourseController {
    @Autowired
    private CourseService service;

    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        return new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Course>>getAllCourse(){
        return ResponseEntity.ok(service.getAllCourse());
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getCourseById(@PathVariable long id){
        Course course = service.getCourseById(id);
        if (course!=null){
            return ResponseEntity.ok(course);
        }
        else {
            return new ResponseEntity<>("Student not found",HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("{id}")
    public void deleteCourse(@PathVariable Long id) {
        service.deleteCourseById(id);
    }


    @PutMapping("{id}")
    public ResponseEntity<Object> updateCourseById(@PathVariable long id,@RequestBody Course course){
        Course found = service.updateCourseById(course, id);
        if (found!=null){
            return ResponseEntity.ok(found);
        }
        return new ResponseEntity<>("Course not found",HttpStatus.NOT_FOUND);
    }
}
