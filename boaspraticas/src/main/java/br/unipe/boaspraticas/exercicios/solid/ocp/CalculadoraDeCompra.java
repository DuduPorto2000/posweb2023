package br.unipe.boaspraticas.exercicios.solid.ocp;

import br.unipe.boaspraticas.exercicios.solid.model.Compra;

// Classe responsável por calcular o valor total de uma compra
public class CalculadoraDeCompra {
    public double calcularTotal(Compra compra) {
        return compra.calcularTotal(); // Delega o cálculo do total para a compra
    }
}
