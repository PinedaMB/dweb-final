import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  items: MenuItem[] = [];

  newUser = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    correo: '',
    password: '',
    sexo: '',
    id_estado: 1,
    id_municipio: 1,
    id_ciudad: 1,
    estado_civil: '',
    lengua_indigena: 'no',
    discapacidad: 'no',
    telefono: '',
  }

  constructor(private router: Router, private apiService: ApiService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
    ];
  }

  register() {
    console.log(this.newUser);
    this.apiService.register(this.newUser).subscribe({
      next: (data) => {
        let res = JSON.parse(JSON.stringify(data));
        console.log(res);
        if (res.status != 'success') {
          this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: `${res.error}` });
        } else {
          this.showDialog();
        }
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  navigateLogin() {
    this.display = false;
    this.router.navigate(['/ingresar']);
  }
}
