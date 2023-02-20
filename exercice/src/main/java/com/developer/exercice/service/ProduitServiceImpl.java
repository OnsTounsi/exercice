package com.developer.exercice.service;

import com.developer.exercice.entities.Categorie;
import com.developer.exercice.entities.Produit;
import com.developer.exercice.repositories.CategorieService;
import com.developer.exercice.repositories.ProduitRepository;
import com.developer.exercice.repositories.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ProduitServiceImpl implements ProduitService {
  @Autowired
  private ProduitRepository produitRepository;
  @Autowired
  private CategorieService categorieService;
  @Override
  public Optional<Produit> findById(Long Id) {

      return produitRepository.findById(Id);
  }
  @Override
  public List<Produit> findAll(){

      return produitRepository.findAll();
  }
  @Override
  public List<Produit> AfficherProduitByCategorie(Long idCategorie) {
    Categorie categorie = categorieService.findById(idCategorie).get();
    return produitRepository.findByCategorie(categorie);
  }

    public Produit create (Produit Produit , long id){

      Produit.getCategorie();

      Categorie categorie = categorieService.findById(id).orElse(null);
      Produit.setCategorie(categorie);
      LocalDate date = LocalDate.now();
      Produit.setDateCreation(date);


      return produitRepository.save(Produit);
    }
    @Override
    public boolean supprimer(Long Id) {

      produitRepository.deleteById(Id);
        return true;
      }

      public Produit modif(Long id, Produit Produit,Long idCat) {
        Produit.getCategorie();
        Categorie categorie = categorieService.findById(idCat).orElse(null);
        Produit.setCategorie(categorie);
          Produit existingProduct = produitRepository.findById(id).orElse(null);
          if (existingProduct != null) {
              existingProduct.setNom(Produit.getNom());
              existingProduct.setCategorie(Produit.getCategorie());
              existingProduct.setQuantite(Produit.getQuantite());
              existingProduct.setDisponible(Produit.getDisponible());
              existingProduct.setDateModif(LocalDate.now());

              return produitRepository.save(existingProduct);
          }
          return null;
      }
}
