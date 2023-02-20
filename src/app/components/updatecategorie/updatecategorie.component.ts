import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Categorie } from '../Categorie';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent implements OnInit {

  Categorie?: Categorie
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getCategorieById(id).subscribe(data => {
      this.Categorie = data
      console.log(this.Categorie)
    })
  }

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    quantite: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.service.updateCategorie(this.Categorie?.id, this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/all-categories']);
  }

}