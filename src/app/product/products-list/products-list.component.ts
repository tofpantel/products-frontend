import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, ProductAPIList } from '../product.interfaces';
import { ProductService } from '../product.service';
import {orderBy} from 'lodash-es'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  constructor(private productService:ProductService){}
  loading = false;
  productList:Product[]=[];

  subscription: Subscription | undefined;
  costSortType: 'asc' | 'desc' = 'asc';


  ngOnInit(): void {
    console.log('Starting "findAll" API call')
    this.loading = true;
    this.subscription = this.productService.findAll().subscribe({
      // it s an observable which means we need to examine various scenarios
      // and define the corresponding actions
      next: (apiData: ProductAPIList) => {
        const{status, data} = apiData
        this.productList = data
        console.log(status, data);
      },
      error:(error)=> {
        this.loading = false;
        console.log(error)
      },
      complete:()=> {
        this.loading = false;
        console.log('API call completed')
      },
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSort(key: string){
    switch(key){
      case 'cost':
        this.costSortType = this.costSortType === 'asc'? 'desc':'asc'
        break;
    }
  }

}
