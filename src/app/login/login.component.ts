import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email!:string;
  password!:string;

  login(){
     console.log(this.email + " " + this.password);

    let usersJson = localStorage.getItem('USERS');
    let users = usersJson != null ? JSON.parse(usersJson) : [];

    let user = users.find( (u:any) => u.email == this.email && u.password == this.password);
    if(user != null){
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
      alert("Login Successful");
      window.location.href="viewaccount";

    }else {
      alert("Invalid Login Credentials");
    }
  }

}
