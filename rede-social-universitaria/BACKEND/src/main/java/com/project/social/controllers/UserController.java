package com.project.social.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.project.social.entities.User;
import com.project.social.entities.dto.UserDTO;
import com.project.social.services.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User fingById(@PathVariable Integer id) {
        return userService.findByid(id);
    }

    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody User user) {
    	 ResponseEntity<?> response = userService.addUser(user);
         if (response.getStatusCode() == HttpStatus.OK) {
             URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                     .path("/{id}")
                     .buildAndExpand(((User) response.getBody()).getId())
                     .toUri();
             return ResponseEntity.created(uri).body(response.getBody());
         }
         return response;
    }
    
    @DeleteMapping(value = "/{id}")
	public void deleteBook(@PathVariable Integer id) {
		userService.deleteUser(id);
	}
    
    @PutMapping(value = "/{id}")
	public User updateUser(@PathVariable Integer id,@RequestBody User user) {
		return userService.updateUser(id, user);
	}
    
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserDTO data){
    	return userService.loginUser(data);
    }

}
