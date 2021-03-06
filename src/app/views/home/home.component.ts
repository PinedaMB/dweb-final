import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cursos: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCursos().subscribe(
      (data) => {
        this.cursos = data;
      }
    );
  }

}
