package br.unipe.boaspraticas.exercicios.solid.lsp.formas;

class Rectangle implements GeometricShape {
    private int width;
    private int height;

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    @Override
    public int getArea() {
        return width * height;
    }

    public void draw() {
        // Desenhar um retângulo
    }
}
