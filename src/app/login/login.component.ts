import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserService } from '../services/user.service';

interface credentialsInterface{
  login: string,
  pass: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: credentialsInterface  = {
    login: "",
    pass: ""
  };

  errorMessage = "";


  constructor(private http: HttpClient, private userService: UserService) { };

  ngOnInit(): void {
  };

  validateForm(){
    this.http.post('http://localhost:3000/login', this.credentials)
      .subscribe(
        (response: any) => {
          this.errorMessage = '';
          this.userService.user = response.user;
          this.userService.token = response.token;
        },
        (err) => {
          this.errorMessage = "Vos infos d'authentification  sont incorrectes";
        }
      )
  }
}
