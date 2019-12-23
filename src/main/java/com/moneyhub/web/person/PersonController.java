package com.moneyhub.web.person;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moneyhub.web.util.Printer;

@RestController
@CrossOrigin(origins = "http://localhost:8081")	// 8081에서 오는 값 받기
public class PersonController {
	@Autowired private PersonRepository personRepository;
	@Autowired private Person person;
	@Autowired private Printer printer;
	
	@RequestMapping("/")
	public String index() {
		Iterable<Person> all = personRepository.findAll();
		StringBuilder sb = new StringBuilder();
		all.forEach(p -> sb.append(p.getName() + " "));
		return sb.toString();
	}
	@RequestMapping("/login")
	public HashMap<String, Object> login(@RequestBody Person param) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		printer.accept("로그인 진입");
		printer.accept(String.format("USERID : %s", param.getUserid()));
		printer.accept(String.format("PASSWD : %s", param.getPasswd()));
		person = personRepository.
				findByUseridAndPasswd(param.getUserid(), param.getPasswd());
		if(person != null) {
			printer.accept("로그인 성공");
			map.put("result", "SUCCESS");
			map.put("person", person);
			printer.accept(map.get("result"));
		}else {
			printer.accept("로그인 실패");
			map.put("result", "FAIL");
			map.put("person", person);
		}
		return map;
	}
}
