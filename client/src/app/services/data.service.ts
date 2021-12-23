import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/Person';
import { catchError } from 'rxjs';
import { PersonShort } from '../models/PersonShort';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPerson(id: number){
    return this.http.get<Person>(`/v1/person/${id}`);
  }

  getPeople(){
    return this.http.get<PersonShort[]>('/v1/person');
  }
}
