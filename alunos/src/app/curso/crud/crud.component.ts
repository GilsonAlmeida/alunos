import { Component, OnInit } from '@angular/core';
import { CursoService } from './../../curso.service';
import { SuperCrud } from './../../comum/supercrud.component';


@Component({
  selector: 'crudcurso',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent  extends SuperCrud implements OnInit {

  constructor(service:CursoService) { 
    super(service);
 }

  ngOnInit() {
  }

}
