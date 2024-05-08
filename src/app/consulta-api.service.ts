import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Response {
  resultado: string;
  erro: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConsultaApiService {
  constructor(private http: HttpClient) {}

  getCalcApi(dividendo: any, divisor: any): Observable<Response> {
    return this.http.get<Response>(
      `http://localhost:5094/dividir?dividendo=${dividendo}&divisor=${divisor}`
    );
  }
}
