# # ---------- Build Stage ----------
# FROM maven:3.9.6-eclipse-temurin-17 AS build
# WORKDIR /app
# COPY pom.xml .
# COPY src ./src
# RUN mvn -DskipTests clean package
#
# # ---------- Run Stage ----------
# FROM eclipse-temurin:17-jre-jammy
# WORKDIR /app
# COPY --from=build /app/target/*.jar app.jar
# EXPOSE 8080
# CMD ["sh", "-c", "java -Dserver.port=$PORT -jar app.jar"]



# # ---------- Build Stage ----------
# FROM maven:3.9.6-eclipse-temurin-17 AS build
# WORKDIR /app
# COPY pom.xml .
# COPY src ./src
# RUN mvn -B -DskipTests clean package
#
# # ---------- Run Stage ----------
# FROM eclipse-temurin:17-jre-jammy
# WORKDIR /app
# COPY --from=build /app/target/*.jar app.jar
# EXPOSE 8080
# CMD ["sh", "-c", "java -Dserver.port=$PORT -jar app.jar"]
# Use JDK runtime only
FROM eclipse-temurin:17-jre-jammy

# Set working directory
WORKDIR /app

# Copy your pre-built JAR
COPY target/photography-app-0.0.1-SNAPSHOT.jar app.jar

# Expose port for Render
EXPOSE 8080

# Run Spring Boot app
CMD ["sh", "-c", "java -Dserver.port=$PORT -jar app.jar"]


