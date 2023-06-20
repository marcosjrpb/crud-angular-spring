package com.app.crud;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.app.crud.enums.Category;
import com.app.crud.model.Course;
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
			 Course c2 = new Course();
			 Course c3 = new Course();
			 c.setName("Angular com Spring");
			 c.setCategory(Category.BACK_END);
		
			 c2.setName("Java Mobile");
			 c2.setCategory(Category.FRONT_END);
		
			 c3.setName("Flutter");
			 c3.setCategory(Category.BACK_END);
			 
			 courseRepository.save(c);
			 courseRepository.save(c2);
			 courseRepository.save(c3);
		 };
	 
	}

}
