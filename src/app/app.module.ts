import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { ViewcategoriesComponent } from './components/viewcategories/viewcategories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitsComponent } from './components/viewproduits/viewproduits.component';
import {MatSelectModule} from '@angular/material/select';
import { ViewproduitbycategorieComponent } from './viewproduitbycategorie/viewproduitbycategorie.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddcategorieComponent,
    ViewcategoriesComponent,
    UpdatecategorieComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    ViewproduitsComponent,
    ViewproduitbycategorieComponent,
    FilterPipe,
    
    
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
