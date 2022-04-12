import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements AfterViewInit {

  message = '';

  constructor(private http: HttpClient,
             private userService: UserService,
              private router: Router) { }

  ngAfterViewInit(): void {
      this.http.get(
        'http://localhost:3000/secure',
        {
          headers: {
            Authorization: 'Bearer ' + this.userService.token
          }
        }
      ).subscribe(
        (response: any) => {
          console.log(response);
          this.userService.user  = response.user;
          this.userService.token =  response.token;          
        },
        (err) => {
          this.message = 'Accès interdit cette écran sera autodétruit dans 30 secondes'
          setTimeout(() => {
            this.message = '';
            this.router.navigateByUrl('/login');
          }, 10000);
          
        }
      )
  }

}
