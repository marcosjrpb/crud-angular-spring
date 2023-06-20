package com.app.crud.dto.mapper;

import org.springframework.stereotype.Component;

import com.app.crud.dto.CourseDTO;
import com.app.crud.model.Course;

@Component
public class CourseMapper {
	
	public CourseDTO toDTO(Course course) {
		if(course == null) {
			return null;
		}		
		
		return new CourseDTO(course.getId(), course.getName(), course.getCategory());
	}
	
	public Course toEntity(CourseDTO courseDTO) {
		if(courseDTO == null) {
			return null;
		}		
		Course course = new Course();
		if (courseDTO.id() != null) {
			course.setId(courseDTO.id());
		}
		course.setName(courseDTO.name());
		course.setCategory(courseDTO.category());	
		course.setStatus("Ativo");
		return course;
	 
	}
	
}
