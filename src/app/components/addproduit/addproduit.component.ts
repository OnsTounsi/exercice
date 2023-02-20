import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ProduitService } from 'src/app/produit.service';
import { Categorie } from '../Categorie';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})

export class AddproduitComponent implements OnInit {
  constructor(private service: ProduitService, private router: Router,private route:ActivatedRoute) { }
  data: any
  id:any
  
  
  form = new FormGroup({
    nom: new FormControl(null, [Validators.required]),
    quantite: new FormControl(0, [Validators.required]),
    disponible: new FormControl(null, [Validators.required]),
    categorieId: new FormControl(0, [Validators.required]),
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.id=this.data.categorieId
    this.service.addProduit(this.id,this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/all-categories']);
  }
}