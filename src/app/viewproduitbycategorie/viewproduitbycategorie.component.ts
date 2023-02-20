import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ngxCsv } from 'ngx-csv';
import { AppService } from 'src/app/app.service';
import { Produit } from '../components/Produit';
import { ProduitService } from '../produit.service';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-viewproduitbycategorie',
  templateUrl: './viewproduitbycategorie.component.html',
  styleUrls: ['./viewproduitbycategorie.component.css']
})
export class ViewproduitbycategorieComponent {
  produit: any[] | undefined
  searchTerm: string='';
  url: string = "http://localhost:8080/Produits";

  constructor(private service: ProduitService, private router: Router,private route: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getProductsByCategory(id).subscribe(data => {
      this.produit = data;
      console.log(data);
    })
  }
  deleteProduit(id: number){
    this.service.deleteProduit(id).subscribe(data => {
      this.produit = this.produit?.filter(produit => produit.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }
  updateProduit(id: number){
    this.router.navigate(['updateProduit', id]);
  }
  downlodCsvFil(){
    new ngxCsv(this.produit, 'Produits');
  }
  downlodPDF(){
    
    const doc = new jsPDF('p','pt');
          
    autoTable(doc, {
    
      body: this.produit,
      didDrawPage: (dataArg) => { 
       doc.text('produits', dataArg.settings.margin.left, 10);
      }
 }); 
    doc.save('produits.pdf');
  }

}