package br.unipe.boaspraticas.exercicios.oc;

import br.unipe.boaspraticas.exercicios.solid.model.Item;

import java.util.List;

public class AddRemoveItens {

    List<Item> items;
    public void addItem(Item item) {
        items.add(item);
    }

    public void removeItem(Item item) {
        items.remove(item);
    }
}
