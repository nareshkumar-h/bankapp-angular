import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  loggedInUser:any;

  ngOnInit(): void {
    const user= localStorage.getItem("LOGGED_IN_USER")
    this.loggedInUser = user != null ? JSON.parse(user): null;
    
  }

  

}
