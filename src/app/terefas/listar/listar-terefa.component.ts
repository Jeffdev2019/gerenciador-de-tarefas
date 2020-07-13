import { Component, OnInit } from '@angular/core';

import { TerefaService, Terefa } from '../shared';

@Component({
  selector: 'app-listar-terefa',
  templateUrl: './listar-terefa.component.html',
  styleUrls: ['./listar-terefa.component.css']
})
export class ListarTerefaComponent implements OnInit {

  terefas: Terefa[];

  constructor( private terefaService: TerefaService ) { }

  ngOnInit(): void {
    this.terefas = this.listarTodos();
  }

  listarTodos(): Terefa[] {
    return this.terefaService.listarTodos();
  }

  remover($event: any, terefa:  Terefa): void{
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + terefa.nome + '"?'))
    {
      this.terefaService.remover(terefa.id);
      this.terefas = this.listarTodos();
    }
  }

  alterarStatus(terefa: Terefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + terefa.nome + '"?'))
    {
      this.terefaService.alterarStatus(terefa.id);
      this.terefas = this.listarTodos();

    }
  }

}
