package br.unipe.boaspraticas.exercicios.solid.sip.animais;

public class Peixe implements Peixes {
    @Override
    public void comer() {
        System.out.println("O Peixe está comendo.");
    }

    @Override
    public void dormir() {
        System.out.println("O Peixe está dormindo.");
    }

    @Override
    public void nadar() {
        System.out.println("O Peixe está nadando.");
    }
}
