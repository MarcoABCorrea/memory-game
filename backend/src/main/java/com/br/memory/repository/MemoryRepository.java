package com.br.memory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.memory.model.Player;

@Repository
public interface MemoryRepository extends JpaRepository<Player, Long> {

}
