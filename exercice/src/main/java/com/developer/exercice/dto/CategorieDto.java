package com.developer.exercice.dto;

import com.developer.exercice.entities.Categorie;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

@Builder
@Data
public class CategorieDto {

    private Long Id;

    private String Nom;

    private int Qt;

    private LocalDate Date_creation;

    private LocalDate Date_modif;

    private List<ProduitDto> p;

    public CategorieDto fromEntity(Categorie categorie){
        if(categorie == null){
            return null;
        }
        return CategorieDto.builder()
                .Id(categorie.getId())
                .Nom(categorie.getNom())
                .Qt(categorie.getQuantite())
                .Date_creation(categorie.getDateCreation())
                .Date_modif(categorie.getDateModif())
                .build();

    }

    public Categorie toEntity(CategorieDto categorieDto){
        if(categorieDto == null){
            return null;
        }
        Categorie categorie = new Categorie();
        categorie.setId(categorieDto.getId());
        categorie.setNom(categorieDto.getNom());
        categorie.setQuantite(categorieDto.getQt());
        categorie.setDateCreation(categorieDto.getDate_creation());
        categorie.setDateModif(categorieDto.getDate_modif());
        return categorie;
    }

}
