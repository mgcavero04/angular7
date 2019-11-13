import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WallsComponent } from './walls.component';

const routes: Routes = [
  { path: '', component: WallsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [WallsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class WallsModule {}
