import { Routes } from '@angular/router';

import { ListarTerefaComponent } from './listar';
import { CadastrarTerefaComponent } from './cadastrar';
import { EditarTerefaComponent } from './editar';


export const TerefaRoutes: Routes = [
    {
        path: 'terefas',
        redirectTo: 'terefas/listar'
    },
    {
        path: 'terefas/listar',
        component: ListarTerefaComponent
    },
    {
        path: 'terefas/cadastrar',
        component: CadastrarTerefaComponent
    },
    {
        path: 'terefas/editar/:id',
        component: EditarTerefaComponent
    }
];