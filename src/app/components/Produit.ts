import { Categorie } from "./Categorie"

export interface Produit {
    id: number
    categorie: Categorie
    nom: string
    quantite: number
    disponible: boolean
    dateCreation: Date
    dateModif: Date
}