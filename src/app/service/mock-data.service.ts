import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor(private http: HttpClient) {}

  getAll(url: any): Observable<any> {
    return this.http.get(url).pipe(map((response) => response));
  }
}
