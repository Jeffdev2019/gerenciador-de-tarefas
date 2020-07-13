import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TerefaService, TerefaConcluidaDirective} from './shared';
import { ListarTerefaComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTerefaComponent } from './cadastrar';
import { EditarTerefaComponent } from './editar';





@NgModule({
  declarations: [
    ListarTerefaComponent,
    CadastrarTerefaComponent,
    EditarTerefaComponent,
    TerefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TerefaService
  ]
})
export class TerefasModule { }
