package com.kamikase.web.posbackend.repository;


import com.kamikase.web.posbackend.model.Clube;
import com.kamikase.web.posbackend.model.dto.ClubeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ClubeRepository extends JpaRepository<Clube, Integer> {

    public List<Clube> findByNomeOrderByNomeAsc(String nome);
  
}
