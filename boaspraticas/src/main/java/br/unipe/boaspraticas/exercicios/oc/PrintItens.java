package br.unipe.boaspraticas.exercicios.oc;

import br.unipe.boaspraticas.exercicios.solid.model.Item;

import java.util.List;

public class PrintItens {

    List<Item> items;
    public void printItems() {
        for (Item item : items) {
            System.out.println(item.getN() + " - $" + item.getP());
        }
    }
}
