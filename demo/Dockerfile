FROM maven:3.8.5-openjdk-19 AS maven_build

COPY pom.xml /tmp/

COPY src /tmp/src/

# Build stage doesn't need a working directory

FROM openjdk:17-alpine

# Copy JAR after switching to the new image
ADD target/*.jar app.jar

WORKDIR /

# Rest of your instructions

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app.jar"]
