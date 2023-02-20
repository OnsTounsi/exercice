package com.developer.exercice.controllers;

import com.developer.exercice.entities.Categorie;
import com.developer.exercice.repositories.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/categorie")
public class CategorieController {

    private CategorieService categorieService;
    @Autowired
    public CategorieController(CategorieService categorieService) {

        this.categorieService = categorieService;
    }

    @GetMapping("/{id}")
    public Optional<Categorie> findById(@PathVariable("id") Long Id) {

        return categorieService.findById(Id);
    }
    @GetMapping
    public List<Categorie> findAll() {

      return categorieService.findAll();
    }
    @PostMapping
    public Categorie ajout(@RequestBody Categorie c) {

        return categorieService.ajout(c);
    }
    @DeleteMapping("/{id}")
    public void supprimer(@PathVariable("id") Long Id) {
        categorieService.supprimer(Id);

    }
    @PutMapping("/{id}")
    public Categorie modif(@PathVariable("id") Long Id,@RequestBody Categorie c) {

        return categorieService.modif(Id,c);
    }
}
