import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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


  constructor(private http: HttpClient) { };

  ngOnInit(): void {
  };

  validateForm(){
    this.http.post('http://localhost:3000/login', this.credentials)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          this.errorMessage = "Vos infos d'authentification  sont incorrectes";
        }
      )
  }
}
