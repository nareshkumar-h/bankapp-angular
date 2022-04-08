import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

  constructor() { }

  accounts:any;
  ngOnInit(): void {
    let users = localStorage.getItem("USERS");
    this.accounts = users != null ? JSON.parse(users) : [];
  }

  enableAccount(account:any, index:number){
    let selectedAccount = this.accounts[index];
    selectedAccount.accountActive = true;
    
    //update the account
    this.accounts[index] = selectedAccount;
    //store the details into localStorage
    localStorage.setItem("USERS", JSON.stringify(this.accounts));

    alert("Activated Account");
  }

  disableAccount(account:any, index:number){
    let selectedAccount = this.accounts[index];
    selectedAccount.accountActive = false;
    this.accounts[index] = selectedAccount;
    localStorage.setItem("USERS", JSON.stringify(this.accounts));
    alert("Deactivated Account");
  }

}
