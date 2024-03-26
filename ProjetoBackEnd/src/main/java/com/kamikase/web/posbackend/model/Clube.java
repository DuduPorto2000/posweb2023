package com.kamikase.web.posbackend.model;

import com.kamikase.web.posbackend.validator.NomeClubelValidation;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CNPJ;

import java.util.Date;

@Getter
@Setter
@Entity
public class Clube {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 200)
    @NotEmpty(message = "O nome do clube não poder ser nulo ou em branco")
    @NomeClubelValidation(message = "Nome inválido: Flamengo, Palmeiras, Fluminense, Botafogo, não são permitidos")
    private String nome;

    @NotEmpty(message = "Este campo é obrigatorio")
    private  String estado;

    @Email
    @NotEmpty(message = "Este campo é obrigatorio")
    private String email;

    @CNPJ
    @NotEmpty(message = "Este campo é obrigatorio")
    private String cnpj;

    @NotEmpty(message = "Este campo é obrigatorio")
    private Date dataCriacao;
}
