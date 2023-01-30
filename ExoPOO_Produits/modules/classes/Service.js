import { Article } from "./Article.js";

export default class Service extends Article {
    constructor(titre, prix, description, domaine) {
        super(titre, prix, description);
        this.domaine = domaine;
    }
}