import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name!:string;
  email!:string;
  password!:string;
  accountType!:string;

  register(){
    let userObj = { name: this.name, email: this.email , password: this.password,
    role:"USER" , createdDate: new Date().toJSON(), active: true,
  accountType: this.accountType , balance: 0 , accountActive: true };
    console.log(userObj);


    let usersJson = localStorage.getItem('USERS');
    let users = usersJson != null ? JSON.parse(usersJson) : [];
    // let users = [];
    users.push(userObj);
    localStorage.setItem('USERS', JSON.stringify(users));  
    alert("Register Successful");
  }

}
