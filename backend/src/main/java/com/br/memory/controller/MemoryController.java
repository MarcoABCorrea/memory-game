package com.br.memory.controller;

import com.br.memory.exception.ResourceNotFoundException;
import com.br.memory.model.Player;
import com.br.memory.repository.MemoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MemoryController {

    @Autowired
    MemoryRepository memoryRepository;

    @GetMapping("/player")
    public List<Player> getAllPlayers() {
        return memoryRepository.findAll();
    }

    @PostMapping("/player")
    public Player createPlayer(@Valid @RequestBody Player player) {
    	System.out.println("saving " + player.getName());
        return memoryRepository.save(player);
    }

    @GetMapping("/player/{id}")
    public Player getPlayerById(@PathVariable(value = "id") Long playerId) {
        return memoryRepository.findById(playerId)
                .orElseThrow(() -> new ResourceNotFoundException("Player", "id", playerId));
    }

    @PutMapping("/player/{id}")
    public Player updateNote(@PathVariable(value = "id") Long playerId,
                                           @Valid @RequestBody Player playerDetails) {

        Player player = memoryRepository.findById(playerId)
                .orElseThrow(() -> new ResourceNotFoundException("Player", "id", playerId));

//        note.setTitle(playerDetails.getTitle());
//        note.setContent(playerDetails.getContent());

        Player updatedPlayer = memoryRepository.save(player);
        return updatedPlayer;
    }

    @DeleteMapping("/player/{id}")
    public ResponseEntity<?> deletePlayer(@PathVariable(value = "id") Long playerId) {
        Player player = memoryRepository.findById(playerId)
                .orElseThrow(() -> new ResourceNotFoundException("Player", "id", playerId));

        memoryRepository.delete(player);

        return ResponseEntity.ok().build();
    }
}
