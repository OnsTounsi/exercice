import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ngxCsv } from 'ngx-csv/ngx-csv'; 
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import { Ng2SearchPipe } from 'ng2-search-filter';



@Component({
  selector: 'app-viewcategories',
  templateUrl: './viewcategories.component.html',
  styleUrls: ['./viewcategories.component.css'],
  
})
export class ViewcategoriesComponent implements OnInit {
categories: any[] | undefined

  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories)
    })
  }

  deleteCategorie(id: number){
    this.service.deleteCategorie(id).subscribe(data => {
      this.categories = this.categories?.filter(categorie => categorie.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  } 

  updateCategorie(id: number){
    this.router.navigate(['updateCategorie', id]);
  }
  downlodCsvFil(){
    new ngxCsv(this.categories, 'Categories');
  }
  downlodPDF(){
    
    const doc = new jsPDF('p','pt');
          
    autoTable(doc, {
    
      body: this.categories,
      didDrawPage: (dataArg) => { 
       doc.text('categories', dataArg.settings.margin.left, 10);
      }
 }); 
    doc.save('categories.pdf');
  }
  onCellClick(categorieId: number) {
    this.router.navigate(['getProduitByCategorie/', categorieId]);
  }
 

}