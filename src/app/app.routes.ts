import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component'; 
import { AboutComponent } from './MyComponents/about/about.component';


export const routes: Routes = [
    // { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
];
