package com.developer.exercice.repositories;

import com.developer.exercice.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CategorieService {
    List<Categorie> findAll();

    Optional<Categorie> findById(Long Id);
    Categorie ajout(Categorie c);
    boolean supprimer(Long Id);

    Categorie modif(Long Id,Categorie c);

}
