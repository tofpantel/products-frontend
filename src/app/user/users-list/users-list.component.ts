import { Component, OnDestroy, OnInit } from '@angular/core';
import { User, UserAPIList } from 'dist/shared/lib/user.interfaces';
import { UserService } from '../user.service';

import { from, Subscription } from 'rxjs';
import {orderBy} from 'lodash-es'
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  // Inject the service
  constructor(private userService: UserService){}
  loading= false;
  userList: User[]=[];
  subscription: Subscription | undefined

  usernameSortType: 'asc' | 'desc' = 'asc';

  firstNameSortType: 'asc' | 'desc' = 'asc';

  lastNameSortType: 'asc' | 'desc' = 'asc';
  // The functionality follows the injection
  ngOnInit(): void {
    console.log('Starting "findAll" API call')
    this.loading = true;
    // Use the service, which looks for the findAll()
    this.subscription = this.userService.findAll().subscribe({ 
      // it s an observalbel which means we nneed to examine various scenarios
      // and define the corresponding actions
      next: (apiData: UserAPIList) => {
        // we have a staus boolean and a data of type User[]
        const {status, data} = apiData
        this.userList = data;
        console.log(status, data);
       },
      error: (error)  => { 
        this.loading = false;
        console.log(error) },
      complete: () => {
        this.loading = false;
        console.log('API call completed' )
      },
    })
  }

  ngOnDestroy(): void {
    // ? means that if the object is not undefined, perform an unsubscribe()
    this.subscription?.unsubscribe();
  }

  toggleSort(key:string){
    switch(key){
      case 'username':
        this.usernameSortType =
          this.usernameSortType === 'asc' ? 'desc': 'asc';
        break;
      case 'name':
        this.firstNameSortType =
          this.firstNameSortType === 'asc' ? 'desc': 'asc';
        break;
      case 'surname':
        this.lastNameSortType =
          this.lastNameSortType === 'asc' ? 'desc': 'asc';
        break;

    }
  }
}
