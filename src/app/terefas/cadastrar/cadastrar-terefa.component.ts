import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TerefaService, Terefa } from '../shared';
@Component({
  selector: 'app-cadastrar-terefa',
  templateUrl: './cadastrar-terefa.component.html',
  styleUrls: ['./cadastrar-terefa.component.css']
})
export class CadastrarTerefaComponent implements OnInit {

  @ViewChild('formTerefa',  { static: true }) formTerefa; NgForm;
  terefa: Terefa;
  
  constructor(
    private terefaService: TerefaService,
    private router: Router) { }

  ngOnInit(): void {
    this.terefa = new Terefa();
  }

  cadastrar(): void{
    if (this.formTerefa.form.valid){
      this.terefaService.cadastrar(this.terefa);
      this.router.navigate(["/terefas"]);
    }
  }




}
