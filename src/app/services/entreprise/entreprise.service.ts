import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from 'app/models/entreprise';
import { environment } from 'environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private endpoint = environment.API_URL + '/entreprises'; // Correct the endpoint URL to '/entreprises'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.endpoint);
  }

  addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.endpoint, entreprise);
  }

  updateEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.put<Entreprise>(`${this.endpoint}/${entreprise.id}`, entreprise);
  }

  deleteEntreprise(entrepriseId: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/${entrepriseId}`);
  }

  // Remove this method as it is a duplicate
  // getEntreprises(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/entreprises`);
  // }

  getEntrepriseById(id: string): Observable<Entreprise> {
    return this.http.get<Entreprise>(`${this.endpoint}/${id}`); // Correct the endpoint URL to '/clients'
  }
  getEntreprises(): Observable<any[]> { // Add back the getEntreprises method
    return this.http.get<any[]>(this.endpoint);
  }
}
