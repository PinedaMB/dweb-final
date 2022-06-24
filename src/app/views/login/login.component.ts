import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private apiService: ApiService, private messageService: MessageService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getCursos().subscribe({
      next: (data) => {
        console.log(data);
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  submitForm = () => {
    this.apiService.login(this.user).subscribe({
      next: (data) => {
        let res = JSON.parse(JSON.stringify(data));
        if (!res.success) {
          this.messageService.add({ key: 'errorLogin', severity: 'error', summary: 'Error', detail: `${res.message}` });
        } else {
          this.localStorageService.set('isLogged', true);
          this.localStorageService.set('user', res.user);
          this.messageService.add({ key: 'errorLogin', severity: 'success', summary: 'Bienvenido', detail: `Bienvenido ${res.user.nombre}` });
          this.router.navigate(['/']);
        }
      }
      , error: (err) => {
        console.log(err);
      }
    });
  }

  showError = (error: String) => {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error}` });
  }
}
