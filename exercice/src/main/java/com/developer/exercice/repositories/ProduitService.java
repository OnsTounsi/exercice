package com.developer.exercice.repositories;

import com.developer.exercice.entities.Categorie;
import com.developer.exercice.entities.Produit;

import java.util.List;
import java.util.Optional;

public interface ProduitService {
  List<Produit> AfficherProduitByCategorie(Long idCategorie);

    Produit create (Produit Produit , long id);
     List<Produit> findAll();
    Optional<Produit> findById(Long Id);

    boolean supprimer(Long Id);

    Produit modif(Long id, Produit Produit,Long idCat);



}
