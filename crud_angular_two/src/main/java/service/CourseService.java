package service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import com.app.crud.dto.CourseDTO;
import com.app.crud.dto.mapper.CourseMapper;
import com.app.crud.exception.RecordNotFoundException;
import com.app.crud.model.Course;
import com.app.crud.repository.CourseRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class CourseService {
	
	private final CourseRepository courseRepository;
	private final CourseMapper courseMapper;

	public CourseService(CourseRepository courseRepository, CourseMapper courseMapper) {		
		this.courseRepository = courseRepository;
		this.courseMapper = courseMapper;
	}
	
	public List<CourseDTO> list(){
        return courseRepository.findAll()
        		.stream()
        		.map(courseMapper::toDTO)          	 
        		.collect(Collectors.toList());
		}
	
    public CourseDTO findById(@PathVariable @NotNull @Positive Long id) {
    	
    	return courseRepository.findById(id)
    			.map(courseMapper::toDTO)     
    			.orElseThrow(()->new RecordNotFoundException(id));
    }
    
    public  CourseDTO create( @Valid @NotNull CourseDTO course) {     	
    	return courseMapper.toDTO( courseRepository.save(courseMapper.toEntity(course)));
    
}
    
    public CourseDTO update(@NotNull @Positive Long id,@Valid CourseDTO course){     
    	return courseRepository.findById(id)
    			.map(recordFound -> {
    				recordFound.setName(course.name());
    				recordFound.setCategory(course.category());    				
    				return courseMapper.toDTO( courseRepository.save(recordFound));				 
    			}).orElseThrow(()->new RecordNotFoundException(id));
    			 
    	
    }
    public void delete(@PathVariable @NotNull @Positive Long id) {
	    		courseRepository.delete(courseRepository.findById(id)
    				.orElseThrow(()->new RecordNotFoundException(id)));   	
    	
    
 			}
 
	}
