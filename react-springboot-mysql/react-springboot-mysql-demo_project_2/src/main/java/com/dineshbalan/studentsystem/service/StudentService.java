package com.dineshbalan.studentsystem.service;

import com.dineshbalan.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
