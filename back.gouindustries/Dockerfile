#IMAGEN MODELO
FROM eclipse-temurin:17
#DEFINIR DIRECTORIO RAIZ DE NUESTRO CONTENEDOR
WORKDIR /app

#COPIAR Y PEGAR ARCHIVOS DENTRO DEL CONTENEDOR
COPY ./pom.xml /app
COPY ./.mvn /app/.mvn
COPY ./mvnw /app/mvnw
COPY ./src /app/src
# COPY ./target/2024-0.0.1-SNAPSHOT.jar app.jar
#CONSTRUIR NUESTRA APLICACION
RUN ./mvnw clean install -DskipTests
#LEVANTAR NUESTRA APLICACION CUANDO EL CONTENEDOR INICIE
ENTRYPOINT ["java","-jar","/app/target/2024-0.0.1-SNAPSHOT.jar"]

