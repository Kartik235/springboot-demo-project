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



# ---------- Build Stage ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -B -DskipTests clean package

# ---------- Run Stage ----------
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
CMD ["sh", "-c", "java -Dserver.port=$PORT -jar app.jar"]
