import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';
import { Produit } from '../Produit';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {

  produit?: Produit
  data: any
  idCat:any

  constructor(private service: ProduitService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getProduitById(id).subscribe(data => {
      this.produit = data
      console.log(this.produit)
    })
  }

  form = new FormGroup({
    nom: new FormControl(this.produit?.nom, [Validators.required]),
    quantite: new FormControl(this.produit?.quantite, [Validators.required]),
    disponible: new FormControl(this.produit?.disponible,[Validators.required]),
    categorieId:new FormControl(this.produit?.categorie,[Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.idCat=this.data.categorieId
    this.service.updateProduit(this.produit?.id, this.data,this.idCat).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/all-categories']);
  }

}