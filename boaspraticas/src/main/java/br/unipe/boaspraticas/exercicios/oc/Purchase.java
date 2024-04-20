package br.unipe.boaspraticas.exercicios.oc;
public class Purchase {

    Customer customer;
    SendEmail sendEmail;
    public void addToTotalPurchaseAmount(double amount) {
        customer.totalPurchaseAmount += amount;
    }

    public void makePurchase(double amount) {
        if (amount > 0) {
            addToTotalPurchaseAmount(amount);
            System.out.println("Purchase successful!");
            ageVerification(amount);
        }
        System.out.println("Invalid purchase amount!");
    }

    private void ageVerification(double amount) {
        if (customer.age >= 18) {
            sendEmail.sendEmailReceipt(amount);
        }
    }
}

