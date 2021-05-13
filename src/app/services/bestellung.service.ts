import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BestellungService {
  url = 'http://localhost:8080';
  // url = 'http://192.168.2.9:8081';

  constructor(private http: HttpClient) {}

  getBestellung(): Observable<any> {
    return this.http.get(this.url + '/bestellung/2020-12-01/5');
  }

  insertBestellung(object: mettBestellungDefinition): Observable<any> {
    let insertUrl = this.url + '/mett';
    console.log('insertBestellung', insertUrl, object);

    return this.http.post(insertUrl, object);
  }

  updateBestellung(
    id: number,
    object: mettBestellungDefinition
  ): Observable<any> {
    let updateUrl = this.url + '/mett/' + id;
    console.log('updateBestellung', updateUrl, object);

    return this.http.put(updateUrl, object);
  }
}

export interface mettBestellungDefinition {
  mettID?: number;
  anzahl: number;
  bezahlt: boolean;
  ohneMett: boolean;
  mettwochID: number;
  personID: number;
}
