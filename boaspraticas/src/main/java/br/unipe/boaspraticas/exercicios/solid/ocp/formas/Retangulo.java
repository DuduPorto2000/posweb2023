package br.unipe.boaspraticas.exercicios.solid.ocp.formas;


public class Retangulo implements CalculoArea {
    private double altura;
    private double largura;

    // Construtor, getters e setters omitidos

    @Override
    public double calcularArea() {
        return altura * largura;
    }
}
