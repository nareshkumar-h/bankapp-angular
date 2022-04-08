import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    let user = localStorage.getItem("LOGGED_IN_USER");
    return user != null ? true: false;
  }

  getUser(){
    let user = localStorage.getItem("LOGGED_IN_USER");
    return user != null ? JSON.parse(user): null;
  }

  logout(){
    localStorage.removeItem("LOGGED_IN_USER");
    alert("Logout Successful");
  }

}
