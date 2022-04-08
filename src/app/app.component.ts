import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bankapp';

  constructor(private http: HttpClient){

    this.getUsers();
  }
  users:any;

  getUsers(){
    //const url = "http://localhost:8080/bankapp-api/ListUserServlet";
    const url ="assets/users.json";
    this.http.get(url).subscribe(res => { 
      this.users = res;
  });
  }

  register(){
    const userObj = { name: "Naresh", email:"n@gmail.com", 
    password:"pass123"};
    
    const url = "http://localhost:8080/bankapp-api/RegisterServlet  ";
    //const url ="assets/users.json";
   
    let reg = this.http.post(url, userObj);

    reg.subscribe(res => { 
      this.users = res;
  });
  }
}
