package com.moneyhub.web.person;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long>{
	// 자동으로 쿼리가 만들어저서 날라감, JPA가 만듬 - Query 메서드, 메서드 네임 아무거나 하면 안됨
	public Person findByUseridAndPasswd(String userid, String passwd);
	
}
