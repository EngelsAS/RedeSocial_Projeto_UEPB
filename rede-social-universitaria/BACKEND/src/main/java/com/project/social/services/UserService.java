package com.project.social.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.social.entities.User;
import com.project.social.entities.dto.UserDTO;
import com.project.social.repositories.UserRepository;
import com.project.social.services.exceptions.DeleteException;
import com.project.social.services.exceptions.ResourceNotFoundException;

import jakarta.transaction.Transactional;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public List<User> findAll() {
		List<User> response = userRepository.findAll();
		return response;
	}

	@Transactional
	public User findByid(Integer id) {
		return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
	}

	@Transactional
	public ResponseEntity<?> addUser(User user) {
		// Verificar se o email já está em uso
		User existingUser = userRepository.findByAcademicEmail(user.getAcademicEmail());
		if (existingUser == null) {
			// Se o e-mail não está em uso, salvar o usuário
			userRepository.save(user);
			return ResponseEntity.status(HttpStatus.CREATED).body(user);
		} else {
			System.out.println(existingUser.getAcademicEmail());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email Já Cadastrado.");
		}

	}

	public void deleteUser(Integer id) {
		try {
			userRepository.deleteById(id);
		} catch (DeleteException e) {
			throw new DeleteException(e.getMessage());
		}
	}

	@Transactional
	public User updateUser(Integer id, User user) {
		User entity = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
		updateData(entity, user);
		return userRepository.save(entity);
	}

	private void updateData(User entity, User obj) {
		entity.setName(obj.getName());
		entity.setUsername(obj.getUsername());
		entity.setAcademicEmail(obj.getAcademicEmail());
		entity.setPassword(obj.getPassword());
		entity.setPicturePerfilUrl(obj.getPicturePerfilUrl());

	}
	
	@Transactional
	public ResponseEntity<?> loginUser(UserDTO data) {
		User user = userRepository.findByAcademicEmail(data.academicEmail());
		System.out.println(user);
		
        if (user != null) {
        	if(user.getPassword().equals(data.password())) {
        		System.out.println("entrou aqui");
        		return ResponseEntity.ok(user);
        	}
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
	}

}
