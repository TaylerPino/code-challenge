import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './Components/character/character.component';

const routes: Routes = [
  { path: '', component : CharacterComponent}, 
  { path: 'character/:id', loadChildren: () => import('./Components/character/character.module').then(m => m.CharacterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
