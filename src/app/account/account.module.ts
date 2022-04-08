import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAccountComponent } from '../view-account/view-account.component';
import { ListAccountsComponent } from '../list-accounts/list-accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
    ViewAccountComponent,    
    ListAccountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
