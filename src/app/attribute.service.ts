import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(private http: Http) { }

  getAllData(){
   return this.http.get('/api/data')
   .pipe(map(res => res.json()));
  }
}
