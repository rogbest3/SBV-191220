package com.moneyhub.web.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.util.Printer;

@RestController
@CrossOrigin(origins = "http://localhost:8081")	// 8081에서 오는 값 받기
public class PersonController {
	@Autowired
	private PersonRepository personRepository;
	
	@Autowired 
	private Printer printer;
	
	@RequestMapping("/")
	public String index() {
		Iterable<Person> all = personRepository.findAll();
		StringBuilder sb = new StringBuilder();
		all.forEach(p -> sb.append(p.getName() + " "));
		return sb.toString();
	}
	@RequestMapping("/login")
	public Person login(@RequestBody Person person) {
		printer.accept("로그인 진입");
		printer.accept(String.format("USERID : %s", person.getUserid()));
		printer.accept(String.format("PASSWD : %s", person.getPasswd()));
		
		return person;
	}
}
