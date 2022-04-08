import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  constructor() { }

  loggedInUser:any;

  ngOnInit(): void {
    const user= localStorage.getItem("LOGGED_IN_USER")
    this.loggedInUser = user != null ? JSON.parse(user): null;
    
  }

}
