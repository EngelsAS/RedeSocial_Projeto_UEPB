package com.project.social.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.social.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findByAcademicEmail(String academicEmail);

}
