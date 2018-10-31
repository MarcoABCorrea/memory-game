package com.br.memory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MemoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(MemoryApplication.class, args);
	}
}
