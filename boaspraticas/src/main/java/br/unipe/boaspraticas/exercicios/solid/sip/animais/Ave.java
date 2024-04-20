package br.unipe.boaspraticas.exercicios.solid.sip.animais;

public class Ave implements Aves {
    @Override
    public void comer() {
        System.out.println("A Ave está comendo.");
    }

    @Override
    public void dormir() {
        System.out.println("A Ave está dormindo.");
    }

    @Override
    public void voar() {
        System.out.println("A Ave está voando.");
    }
}
