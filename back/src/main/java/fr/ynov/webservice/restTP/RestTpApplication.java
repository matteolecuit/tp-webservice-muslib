package fr.ynov.webservice.restTP;

import com.github.lambdaexpression.annotation.EnableRequestBodyParam;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableRequestBodyParam
public class RestTpApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestTpApplication.class, args);
	}

}
