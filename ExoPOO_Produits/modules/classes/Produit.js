import { Article } from "./Article.js";

export default class Produit extends Article {
    constructor(titre, prix, description, stock) {
        super(titre, prix, description);
        this.stock = stock;
    }
}