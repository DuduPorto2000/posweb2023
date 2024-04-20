package br.unipe.boaspraticas.exercicios.oc;

import br.unipe.boaspraticas.exercicios.solid.model.Item;

import java.util.List;

public class PriceCalculator {

    List<Item> itens;
    public void calculateTotalPrice() {
        double totalPrice = 0;
        totalPrice = getTotalPrice(totalPrice);
        System.out.println("Total Price: " + totalPrice);
    }

    private double getTotalPrice(double totalPrice) {
        for (Item item : itens) {
            totalPrice += item.getP();
        }
        return totalPrice;
    }
}


