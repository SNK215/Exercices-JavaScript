class contact {
    constructor(nom, prenom, dateNaissance, telephone, mail) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.mail = mail;
    }

    getInfo() {
        return `Infos concernant ${this.nom} ${this.prenom} : Date de naissance: ${this.dateNaissance}, tel: ${this.tel}, mail: ${this.mail}`
    }
}