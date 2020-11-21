FROM maven:3.5.2-jdk-8-alpine AS MAVEN_BUILD
COPY back/pom.xml /build/
COPY back/src /build/src/
WORKDIR /build/
RUN mvn package -DskipTests
FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/restTP-0.0.1-SNAPSHOT.jar /app/
ENTRYPOINT ["java", "-jar", "restTP-0.0.1-SNAPSHOT.jar"