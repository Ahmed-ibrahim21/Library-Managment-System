package com.example.demo.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;


@Aspect
@Order(2)
@Component
public class ServiceErrorLoggingAspect {

  @Around(value = "execution(* com.example.demo.service..*(..))")
  public Object logServiceErrors(ProceedingJoinPoint joinPoint) throws Throwable {
    try {
      return joinPoint.proceed();
    } catch (Throwable throwable) {
      System.err.println("Error occurred in service method: " + joinPoint.getSignature().getName());
      System.err.println("Exception: " + throwable.getClass().getSimpleName());
      System.err.println("Message: " + throwable.getMessage());
      return false;
    }
  }
}