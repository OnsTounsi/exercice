import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Categorie } from './components/Categorie';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8080/api/categorie";

  constructor(private http: HttpClient) { }

  // Add Categorie - Create
  addCategorie(Categorie: Categorie){
    return this.http.post<Categorie>(this.url, Categorie)
  }

  // Get Categories - Read
  getCategories(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

  // Get Categorie by Id - Read
  getCategorieById(id: number): Observable<Categorie>{
    return this.http.get<Categorie>(`${this.url}/${id}`)
  }

  // Update Categorie - Update
  updateCategorie(id?: number ,Categorie?: any): Observable<any>{
    return this.http.put<any>(`${this.url}/${id}`, Categorie)
  }

  // Delete Categorie - Delete
  deleteCategorie(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }

}