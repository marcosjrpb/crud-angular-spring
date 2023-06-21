package com.app.crud;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.app.crud.enums.Category;
import com.app.crud.model.Course;
import com.app.crud.model.Lesson;
import com.app.crud.repository.CourseRepository;

@SpringBootApplication
public class CrudAngularTwoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudAngularTwoApplication.class, args);
	}
	
	
	
	 @Bean
	 CommandLineRunner initDatabase(CourseRepository courseRepository) {
		 return args ->{
			 
			 courseRepository.deleteAll();
			 
			 Course c = new Course();
			 Lesson l = new Lesson();	 
			 
			 c.setName("Angular com Spring");
			 c.setCategory(Category.FRONT_END);
			
			 l.setName("Introdução");
			 l.setYouTubeUrl("watch?v=hSEgsZ3nX98");
			 l.setCourse(c);
			 c.getLessons().add(l);
		
			 
			 courseRepository.save(c);
		
			 
		 };
	 
	}

}
