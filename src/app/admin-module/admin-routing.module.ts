import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderComponent } from './gender/gender.component';

const routes: Routes = [
  {
    path: '',
    component: GenderComponent,
  },
  {
    path: 'admin',
    component: GenderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
