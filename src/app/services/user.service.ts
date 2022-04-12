import { Injectable } from '@angular/core';

interface UserInterface {
  login: string,
  pass: string,
  visits: number,
  userName: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserInterface = {
    login: '',
    pass:'',
    visits: 0,
    userName: ''
  }
  token: string = '';

  constructor() { }

  isAuthenticated(){
    return this.user.userName != '';
  }
}
