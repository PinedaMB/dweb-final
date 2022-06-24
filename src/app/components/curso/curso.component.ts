import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso = {
    id_curso: null,
    titulo_curso: '',
    descripcion_corta: '',
    descripcion_larga: '',
    total_horas: '',
    imagen_curso: '',
    tipo_curso: '',
    video_presentacion: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
