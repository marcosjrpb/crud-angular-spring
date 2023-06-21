package com.app.crud.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

import com.app.crud.enums.Category;
import com.app.crud.enums.Status;
import com.app.crud.enums.converters.CategoryConverter;
import com.app.crud.enums.converters.StatusConverter;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;


@Data
@Entity
@SQLDelete(sql = "UPDATE Course SET status = 'Inativo' WHERE id = ?")
@Where(clause = "status = 'Ativo'")

public class Course {	
     	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty("_id")
	private Long id;
	
	@NotBlank
	@NotNull
	@Length(min= 5, max = 100)
	@Column(length = 100, nullable = false)
	private String name;
	
	
	@NotNull
	@Column(length = 10,nullable = false)
	@Convert(converter = CategoryConverter.class)
	private  Category category;
	
	@NotNull	 	
	@Column(length = 200, nullable = false)
	@Convert(converter = StatusConverter.class)
	private Status status = Status.ATIVO;

}
