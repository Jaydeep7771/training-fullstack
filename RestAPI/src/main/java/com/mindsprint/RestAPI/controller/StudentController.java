package com.mindsprint.RestAPI.controller;

import com.mindsprint.RestAPI.Service.StudentService;
import com.mindsprint.RestAPI.models.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin

@RestController
@RequestMapping("/api/student")
public class StudentController {
        @Autowired
    private StudentService service;

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Student>>getStudent(){
        return ResponseEntity.ok(service.getAllStudents());
    }
    @GetMapping("{id}")
    public ResponseEntity<Object> getStudentById(@PathVariable Long id){
        Student found = service.getStudentById(id);
        if (found!=null){
            return ResponseEntity.ok(found);
        }
        return new ResponseEntity<>("Student not ound",HttpStatus.NOT_FOUND);
    }

    @GetMapping("/add/{sid}/course/{cid}")
    public ResponseEntity<Student> registerCourse(@PathVariable Long sid,@PathVariable Long cid){
        service.updateCourseById(cid,sid);
        return new ResponseEntity<>(service.updateCourseById(cid,sid), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Student> loginUser(@RequestBody Student student)
    {
        Student student1 =service.login(student);
        if (student1!=null){
            return  ResponseEntity.ok(student1);
        }
        else
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @GetMapping("/makeadmin/{id}")
    public ResponseEntity<String> makeAdmin(@PathVariable Long id){
        service.makeAdmin(id);
        return new ResponseEntity<>("Role Updated",HttpStatus.OK);
    }
}
