package gnrd.myapp4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;/*WebMvcConfigurer: 
La clase implementa la interfaz WebMvcConfigurer, que proporciona métodos para personalizar 
la configuración de Spring MVC. En este caso, se está sobreescribiendo el método addCorsMappings 
para configurar CORS. */

@SpringBootApplication /*Indica que la clase puede contener definiciones de beans que se 
pueden utilizar para configurar el contexto de la aplicación - Permite a Spring Boot 
configurar automáticamente la aplicación basada en las dependencias presentes en el classpath 
- Permite a Spring buscar automáticamente componentes, configuraciones y servicios en el 
paquete donde se encuentra esta clase y sus subpaquetes.*/
@EnableWebMvc
@Configuration
public class Application implements WebMvcConfigurer {

	@SuppressWarnings("null")
	@Override
	public void addCorsMappings(CorsRegistry registry){

		registry.addMapping("/**")/*registry.addMapping("/**"): Permite las solicitudes CORS para todas las rutas de la aplicación. */
		.allowedOrigins("http://localhost:3000")
		.allowedMethods("GET", "POST", "PUT", "DELETE","OPTIONS")
		.allowedHeaders("*")/*Permite todos los encabezados en las solicitudes. */
		.maxAge(7200);/*maxAge(7200): Define el tiempo máximo (en segundos) que se puede almacenar en caché la respuesta de CORS. */
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
