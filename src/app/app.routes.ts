import { Routes } from '@angular/router';
import { Form } from './form/form';
import { Home } from './home/home';
import { Counter } from './counter/counter';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'counter', component: Counter },
    { path: 'form', component: Form },
];
