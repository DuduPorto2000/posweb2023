package br.unipe.boaspraticas.exercicios.oc;

import br.unipe.boaspraticas.exercicios.solid.model.Item;

import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {
    private List<Item> items;

    public ShoppingCart() {
        items = new ArrayList<>();
    }
}