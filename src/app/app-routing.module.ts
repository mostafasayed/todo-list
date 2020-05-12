import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoItemComponent} from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'all', component: TodoItemComponent},
  {path: 'add', component: TodoFormComponent},
  {path: 'item/:done', component: TodoItemComponent},
  {path: '', pathMatch: 'full', redirectTo: 'all'},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
