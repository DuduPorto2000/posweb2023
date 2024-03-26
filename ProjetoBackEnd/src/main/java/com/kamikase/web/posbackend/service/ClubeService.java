package com.kamikase.web.posbackend.service;

import com.kamikase.web.posbackend.model.Clube;
import com.kamikase.web.posbackend.model.dto.ClubeDTO;
import com.kamikase.web.posbackend.repository.ClubeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ClubeService {

  @Autowired
  private ClubeRepository repository;

  @SuppressWarnings("null")
  public Clube cadastrar(Clube clube){
    return repository.save(clube);
  }

  public Clube alterar(Clube clube){
    if(clube.getId() == null){
      throw new RuntimeException();
    }
    return repository.save(clube);
  }

  @SuppressWarnings("null")
  public void deletar(Integer id){
    repository.deleteById(id);
  }

  @SuppressWarnings("null")
  public Clube consultarPorId(Integer id){
    return repository.findById(id)
            .orElseThrow(RuntimeException::new);
  }

  public List<Clube> listar(){
    return repository.findAll();
  }

  public List<Clube> listarPorNome(String nome){
    return repository.findByNomeOrderByNomeAsc(nome);
  }
  
}
