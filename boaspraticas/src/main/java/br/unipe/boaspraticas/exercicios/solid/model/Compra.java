package br.unipe.boaspraticas.exercicios.solid.model;

import lombok.Data;

import java.util.List;

@Data
public class Compra {
    private List<ItemCompra> itens;
    private Desconto desconto;

    public Compra(List<ItemCompra> itens, Desconto desconto) {
        this.itens = itens;
        this.desconto = desconto;
    }

    public double calcularTotal() {
        double total = 0;
        for (ItemCompra item : itens) {
            total += item.getPrecoTotal();
        }
        return desconto.aplicarDesconto(total);
    }
}
