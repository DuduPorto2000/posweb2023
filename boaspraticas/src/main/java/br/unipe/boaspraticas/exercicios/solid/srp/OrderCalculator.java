package br.unipe.boaspraticas.exercicios.solid.srp;

import br.unipe.boaspraticas.exercicios.solid.model.Item;

import java.util.List;

public class OrderCalculator {
    public double calculateTotalPrice(List<Item> items) {
        double total = 0;
        for (Item item : items) {
            total += item.getP();
        }
        return total;
    }
}
