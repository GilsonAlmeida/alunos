import { Component, OnInit } from '@angular/core';
import { SuperCrud } from './../../comum/supercrud.component';
import {AlunoService} from  './../../aluno.service';

@Component({
  selector: 'crudaluno',
  templateUrl: './crudaluno.component.html',
  styleUrls: ['./crudaluno.component.css']
})
export class CrudalunoComponent  extends SuperCrud implements OnInit {

  constructor(service:AlunoService) {
    super(service);
   }


}
