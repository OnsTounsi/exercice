import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(produit: any[] | undefined, searchTerm: string): any[] | undefined {
    if (!produit || !searchTerm) {
      return produit;
    }

    searchTerm = searchTerm.toLowerCase();

    return produit.filter(produit => {
      return produit.nom.toLowerCase().includes(searchTerm);
    });
  }
}
