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
  router = inject(Router);
  userObj: any = {
    EmailId: '',
    password: '',
  };

  onLogin() {
    if (
      this.userObj.EmailId == 'admin@gmail.com' &&
      this.userObj.password == 'admin'
    ) {
      alert('login success');
      localStorage.setItem('logindata', JSON.stringify(this.userObj));
      this.router.navigateByUrl('dashboard');
    } else alert('something is wrong');
    this.router.navigateByUrl('login');
  }
}
