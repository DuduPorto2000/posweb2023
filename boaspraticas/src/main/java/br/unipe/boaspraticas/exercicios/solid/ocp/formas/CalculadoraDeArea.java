package br.unipe.boaspraticas.exercicios.solid.ocp.formas;

public class CalculadoraDeArea {
    public double calcularAreaTotal(CalculoArea[] formas) {
        double areaTotal = 0;
        for (CalculoArea forma : formas) {
            areaTotal += forma.calcularArea();
        }
        return areaTotal;
    }
}
