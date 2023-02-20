import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ProduitService } from 'src/app/produit.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Produit } from '../Produit';

@Component({
  selector: 'app-viewproduits',
  templateUrl: './viewproduits.component.html',
  styleUrls: ['./viewproduits.component.css']
})
export class ViewproduitsComponent implements OnInit {

produits: any[] | undefined
categorieId: number | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: ProduitService, private router: Router, private route: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
  this.service.getProduits().subscribe(data => {
    this.produits = data;
    console.log(data);
  })
  }
  deleteProduit(id: number){
    this.service.deleteProduit(id).subscribe(data => {
      this.produits = this.produits?.filter(produit => produit.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateProduit(id: number){
    this.router.navigate(['updateProduit', id]);
  }
  downlodCsvFil(){
    new ngxCsv(this.produits, 'Produits');
  }
  downlodPDF(){
    
    const doc = new jsPDF('p','pt');
          
    autoTable(doc, {
    
      body: this.produits,
      didDrawPage: (dataArg) => { 
       doc.text('produits', dataArg.settings.margin.left, 10);
      }
 }); 
    doc.save('produits.pdf');
  }
  
}