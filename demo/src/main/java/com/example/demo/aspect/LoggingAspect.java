package com.example.demo.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Order(1)
@Component
public class LoggingAspect {
	
	
	Logger log = LoggerFactory.getLogger(LoggingAspect.class);
	
	
	@Pointcut(value = "execution(* com.example.demo.repository.*.*(..))")
	public void forRepositoryLog() {}
	
	@Pointcut(value = "execution(* com.example.demo.service.*.*(..))")
	public void forServiceLog () {}
	
	@Pointcut(value = "execution(* com.example.demo.controller.*.*(..))")
	public void forControllerLog () {}
	
	@Pointcut(value = "forRepositoryLog() || forServiceLog() || forControllerLog()")
	public void forAllApp() {}
}