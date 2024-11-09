// Importamos estos elementos
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  // URL de la API
  private url = 'https://app-sgt-be.politesand-6f1a9d36.eastus.azurecontainerapps.io/api';

  constructor(private http: HttpClient) { }

  getAllRequestTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/Request/types`);
  }

  getAllRequest(requestType: string): Observable<any[]> {
    let complementUrl = '';
    if (requestType !== '' && requestType !==undefined){
      complementUrl = `?type=${requestType}`
    }
    return this.http.get<any[]>(`${this.url}/Request${complementUrl}`);
  }

}
