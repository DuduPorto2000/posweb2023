package com.kamikase.web.posbackend.controller;

import com.kamikase.web.posbackend.client.ClubeClient;
import com.kamikase.web.posbackend.model.Clube;
import com.kamikase.web.posbackend.model.dto.ClubeDTO;
import com.kamikase.web.posbackend.service.ClubeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clube")
public class ClubeController {

  @Autowired
  private ClubeService service;

  @Autowired
  private ClubeClient clubeClient;

  @PostMapping("/cadastrar")
  public ResponseEntity<Clube> cadastrar(@RequestBody Clube clube){
    clube = service.cadastrar(clube);
    return ResponseEntity.ok(clube);
  }

  @PutMapping("/alterar")
  public ResponseEntity<Clube> alterar(@RequestBody Clube clube){
    clube = service.alterar(clube);
    return ResponseEntity.ok(clube);
  }

  @DeleteMapping("/deletar/{id}")
  public ResponseEntity<Void> deletar(@PathVariable Integer id){
    service.deletar(id);
    return ResponseEntity.ok().build();
  }

  @GetMapping("/buscar/{id}")
  public ResponseEntity<Clube> consultarPorId(@PathVariable Integer id){
    return ResponseEntity.ok(service.consultarPorId(id));
  }

  @GetMapping("/buscar/todos")
  public ResponseEntity<List<Clube>> listarTodos(){
    return ResponseEntity.ok(service.listar());
  }

  @GetMapping("/buscar/nome/{nome}")
  public ResponseEntity<List<Clube>> listarPorNome(@PathVariable String nome){
    return ResponseEntity.ok(service.listarPorNome(nome));
  }

  // Consulta externa

  @GetMapping("/clube/{id}")
  public ResponseEntity<ClubeDTO> consultarClube(@PathVariable Integer id){
    
    var clubeResponse = clubeClient.consultaClube(id);

    return ResponseEntity.ok(clubeResponse);
  }
}
