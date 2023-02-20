import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Produit } from './components/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = "http://localhost:8080/api/produit";

  constructor(private http: HttpClient) { }

  // Add produit - Create
  addProduit(id:any,produit: Produit){
    return this.http.post<Produit>(`${this.url}/add/`+id, produit)
  }

  // Get produits - Read
  getProduits(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

  // Get produit by Id - Read
  getProduitById(id: number): Observable<Produit>{
    return this.http.get<Produit>(`${this.url}/${id}`)
  }

  // Update produit - Update
  updateProduit(id?: number ,Produit?: any,idCat?:number): Observable<any>{
    return this.http.put<any>(`${this.url}/${id}/${idCat}`, Produit)
  }

  // Delete produit - Delete
  deleteProduit(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }
  // Get Categories - Read
  getProductsByCategory(categorieId: number) {
    return this.http.get<Produit[]>(`${this.url}/categorie/${categorieId}`);
  }

}