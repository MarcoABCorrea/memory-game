package com.br.memory.controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.memory.exception.ResourceNotFoundException;
import com.br.memory.model.Player;
import com.br.memory.repository.MemoryRepository;

@RestController
@RequestMapping("/api")
public class MemoryController {

    @Autowired
    MemoryRepository memoryRepository;
    
    @PersistenceContext
    EntityManager entityManager;

    @CrossOrigin
    @GetMapping("/player")
    public List<Player> getAllPlayers() {
    	Query query = entityManager.createNativeQuery("SELECT * FROM player WHERE tries > 0 ORDER BY tries ASC", Player.class);
    	return query.getResultList();
    }

    @CrossOrigin
    @PutMapping("/player")
    public Player createPlayer(@Valid @RequestBody Player player) {
        return memoryRepository.save(player);
    }
}
