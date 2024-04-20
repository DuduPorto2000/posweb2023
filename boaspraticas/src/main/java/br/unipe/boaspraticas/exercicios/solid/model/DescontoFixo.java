package br.unipe.boaspraticas.exercicios.solid.model;

public class DescontoFixo implements Desconto {
    private double valorDesconto;

    public DescontoFixo(double valorDesconto) {
        this.valorDesconto = valorDesconto;
    }

    @Override
    public double aplicarDesconto(double total) {
        return total - valorDesconto;
    }
}
