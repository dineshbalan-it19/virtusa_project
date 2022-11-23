# ReactJS and Spring Boot Maven Demo Project

Use this project to quickly create a ReactJS and Sprint boot application. Single project contains backend and frontend folders.

This project is pre-configured with below libraries

- Spring:
  - DevTools
  - Lombok

- ReactJS:
  - Formik
  - Material UI
  - React router

### How to reuse this project?

* Clone this repo.
* Rename project folder name to what ever the new project you want.
* Edit pom.xml, update \<artifactId> and \<name> with proper project names.

### Contents of this project
- **pom.xml**: Maven POM file
- **src**: Java/Spring boot source folder (back-end)
- **ui**: ReactJS files (front-end)

### Compile and Run project

`mvnw clean compile`

Builds Spring and ReactJs files

`mvnw spring-boot:run`

Runs application. Spring uses default 8080 port and ReactJS uses 3000 port.


Access application at http://localhost:3000


### Package application

`mnvw install`

Builds Spring and React JS applications, copies UI related files into target/classes/public folder.
Creates a Jar file in target folder, this contains both backend and front end.

### Run the application

Go into target folder and execute below command to run the application

`java -jar <app>.jar`

