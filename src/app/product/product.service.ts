import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { ProductAPIList } from './product.interfaces';

const PRODUCT_API = 'https://codingfactory.ddns.net/api/product/'


@Injectable(
  // {providedIn: 'root'}
)
export class ProductService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<ProductAPIList>(`${PRODUCT_API}/findAll`).pipe(delay(1000))
  }
}
