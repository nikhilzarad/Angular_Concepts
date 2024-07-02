import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isFormChange: boolean = false;
  router = inject(Router)
  userRegisterObj: any = {
    email: '',
    username: '',
    password: '',
  };
  userLogin : any = {
    username: '',
    password: '',
  }

  onsignUp() {
    let localData = localStorage.getItem('loginData');
    if (localData != null) {
      const localArray = JSON.parse(localData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem('loginData', JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem('loginData', JSON.stringify(localArray));
    }
    alert('user created successfully')
  }
  onLogin(){
    let localData = localStorage.getItem('loginData');
    if (localData != null){
      let userData = JSON.parse(localData);
      const userLoginInfo = userData.find((m:any) => m.username == this.userLogin.username && m.password == this.userLogin.password );

      if (userLoginInfo != undefined){
        this.router.navigateByUrl('dashboard')
      }else{
        alert('username or password is Wrong')
      }


    }
  }
}
