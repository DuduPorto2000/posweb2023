package br.unipe.boaspraticas.exercicios.oc;


// Identifique quais são as regras que , neste exemplo, a classe Customer não segue em relação a Object Calisthenics:
// Antes de olhar o arquivo texto com as respostas, tente descrever o que você identificou.
public class Customer {
    private String name;
    int age;
    double totalPurchaseAmount;

    public Customer(String name, int age) {
        this.name = name;
        this.age = age;
        this.totalPurchaseAmount = 0;
    }
}

    // Getters e Setters
