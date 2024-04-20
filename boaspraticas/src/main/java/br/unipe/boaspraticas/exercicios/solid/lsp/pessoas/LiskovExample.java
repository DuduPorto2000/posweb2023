package br.unipe.boaspraticas.exercicios.solid.lsp.pessoas;

public class LiskovExample {
    public static void main(String[] args) {

        Pessoa pessoa = new Funcionario("João", 3000);
        pessoa.fazerSom(); // Oi!

        Pessoa funcionario = new Funcionario("Maria", 4000);
        funcionario.fazerSom(); // Bom dia!
    }
}