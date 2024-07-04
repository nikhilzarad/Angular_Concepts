import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/User/';
  userLogin: any = {
    EmailId: '',
    Password: '',
  };
  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    this.http
      .post(`${this.apiUrl}Login`, this.userLogin)
      .subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('loginData', JSON.stringify(this.userLogin));
          this.router.navigateByUrl('dashboard');
          alert('Login success');
        } else {
          alert(res.message);
        }
      });
  }
}
