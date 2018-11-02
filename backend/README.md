# Backend Info

## Stack & Components

Spring Boot, Java, Maven, JPA, MySQL

## Requirements

1. Java - 1.8.x

2. Maven - 3.x.x

3. Mysql - 5.x.x

##  Setup

**1. Create the MySQL database**

```bash
CREATE DATABASE memorydb;
```

**2. Change MySQL username and password as per your installation**

+ open `src/main/resources/application.properties`

+ change `spring.datasource.username` and `spring.datasource.password` as per your mysql installation. 

I set as the default ones for MySQL: `root` / `root`

**3. Run the app using maven**

```bash
mvn spring-boot:run
```

The app will start running at <http://localhost:8080>.

## Rest APIs

The app defines following CRUD APIs.

    GET /api/player
    
    PUT /api/player

You can test them using postman or any other rest client.
