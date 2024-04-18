import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandListItemDto } from '../models/brand-list-item-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandApiService {

  constructor(private http:HttpClient) { }
  getList(): Observable<BrandListItemDto[]>{
    return this.http.get<BrandListItemDto[]>('http://localhost:3000/brands')
  }

}
