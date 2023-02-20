package com.developer.exercice.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "id_categories")
    private Categorie categorie;
    @Column(name = "nomP")
    private String nom;
    @Column(name="qtP")
    private int quantite;
    @Column(name="Disponible")
    private Boolean disponible;
    @Column(name="dateCP")
    private LocalDate dateCreation;
    @Column(name="dateMP")
    private LocalDate dateModif;

    public Produit(Long id, Categorie cat, String nom, int qt, Boolean disponible, LocalDate date_creation, LocalDate date_modif) {
        this.id = id;
        this.categorie = cat;
        this.nom = nom;
        quantite = qt;
        this.disponible = disponible;
        dateCreation = date_creation;
        dateModif = date_modif;
    }

    public Produit() {

    }
}
