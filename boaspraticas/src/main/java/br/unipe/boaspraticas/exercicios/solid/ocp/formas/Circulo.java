package br.unipe.boaspraticas.exercicios.solid.ocp.formas;


public class Circulo implements CalculoArea {
    private double raio;

    // Construtor, getters e setters omitidos

    @Override
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}
