import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { PopupFormComponent } from './popup-form/popup-form.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponentComponent,
    pathMatch:'full'
  },
  {
    path:'app-popup-form',
    component:PopupFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
