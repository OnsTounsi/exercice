import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { ViewcategoriesComponent } from './components/viewcategories/viewcategories.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitsComponent } from './components/viewproduits/viewproduits.component';
import { ViewproduitbycategorieComponent } from './viewproduitbycategorie/viewproduitbycategorie.component';

const routes: Routes = [
  { path: 'all-categories', component: ViewcategoriesComponent },
  { path: 'addCategorie', component: AddcategorieComponent },
  { path: 'updateCategorie/:id', component: UpdatecategorieComponent},
  { path: 'addProduit', component: AddproduitComponent},
  { path: 'updateProduit/:id', component: UpdateproduitComponent},
  { path: 'produits', component: ViewproduitsComponent},
  { path: 'getProduitByCategorie/:id', component: ViewproduitbycategorieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }