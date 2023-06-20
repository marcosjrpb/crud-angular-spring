package com.app.crud.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.app.crud.exception.RecordNotFoundException;

@RestControllerAdvice
public class ApplicationControllerAdvice   {

	@ExceptionHandler(RecordNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public String handleNotException(RecordNotFoundException ex) {
		return ex.getMessage();
		 
	}
	
}
