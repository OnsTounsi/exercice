package com.developer.exercice.dto;


import com.developer.exercice.entities.Produit;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDate;

@Builder
@Data
public class ProduitDto {

    private Long Id;

    private CategorieDto cat;

    private String Nom;

    private int Qt;

    private Boolean Disponible;

    private LocalDate Date_creation;

    private LocalDate Date_modif;

    public ProduitDto fromEntity(Produit produit){
        if(produit == null){
            return null;
        }
        return ProduitDto.builder()
                .Id(produit.getId())
                .Nom(produit.getNom())
                .Qt(produit.getQuantite())
                .Disponible(produit.getDisponible())
                .Date_creation(produit.getDateCreation())
                .Date_modif(produit.getDateModif())
                .build();

    }

    public Produit toEntity(ProduitDto produitDto){
        if(produitDto == null){
            return null;
        }
        Produit produit = new Produit();
        produit.setId(produitDto.getId());
        produit.setNom(produitDto.getNom());
        produit.setQuantite(produitDto.getQt());
        produit.setDisponible(produitDto.getDisponible());
        produit.setDateCreation(produitDto.getDate_creation());
        produit.setDateModif(produitDto.getDate_modif());
        return produit;
    }
}
