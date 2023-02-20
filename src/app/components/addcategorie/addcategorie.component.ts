import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {
  constructor(private service: AppService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    quantite: new FormControl('', [Validators.required])
  })
  ngOnInit(): void {
   
    
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addCategorie(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/all-categories']);
  }
}