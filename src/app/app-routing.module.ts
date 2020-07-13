import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerefaRoutes } from './terefas';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/terefas/listar',
    pathMatch: 'full'
  },
  ...TerefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
