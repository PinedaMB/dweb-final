import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  userItems: MenuItem[] = [
    { label: 'Perfil', icon: 'pi pi-user', routerLink: ['/perfil'] },
    { label: 'Cerrar Sesión', icon: 'pi pi-power-off', command: () => { this.logout() }}
  ];

  ngOnInit() {
  }

  isLogged = this.localStorageService.get('isLogged') == true ? true : false;

  logout = () => {
    this.localStorageService.set('isLogged', false);
    this.localStorageService.remove('user');
    this.router.navigate(['/ingresar']);
  }
}
