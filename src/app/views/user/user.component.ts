import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ApiService } from 'src/app/api.service';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UserComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService, private apiService: ApiService, private messageService: MessageService, private router: Router, private confirmationService: ConfirmationService) { }

  user = this.localStorageService.get('user');
  id: number = this.user.id_usuario;
  userModel = {
    nombre: this.user.nombre,
    apellido_paterno: this.user.apellido_paterno,
    apellido_materno: this.user.apellido_materno,
    telefono: this.user.telefono,
  }
  ngOnInit(): void {
  }

  updateUser = () => {
    this.apiService.updateUser(this.userModel, this.id).subscribe({
      next: (data) => {
        let res = JSON.parse(JSON.stringify(data));
        if (!res.success) {
          this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: `${res.message}` });
        } else {
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Actualizado', detail: `Datos actualizados` });
          this.localStorageService.set('user', res.user); 
          this.localStorageService.set('isLogged', true);
        }
      }, error: (err) => {
        console.log(err);
      }
    });
  }


  confirmDelete = (event: Event) => {
    this.confirmationService.confirm({
      target: event.target as Element,
      message: '¿Está seguro de eliminar su cuenta?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.eliminarCuenta();
      },
      reject: () => {
      }
    });
  }

  eliminarCuenta = () => {
    this.apiService.deleteUser(this.id).subscribe({
      next: (data) => {
        let res = JSON.parse(JSON.stringify(data));
        if (!res.success) {
          this.messageService.add({ key: 'toast', severity: 'error', summary: 'Error', detail: `${res.message}` });
        } else {
          this.messageService.add({ key: 'toast', severity: 'success', summary: 'Eliminado', detail: `Cuenta eliminada` });
          this.localStorageService.remove('isLogged');
          this.localStorageService.remove('user');
          this.router.navigate(['/login']);
        }
      }
      , error: (err) => {
        console.log(err);
      }
    });
  }
}
