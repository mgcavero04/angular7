import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WallsComponent } from './walls.component';
import { WallschildComponent } from './wallschild/wallschild.component';

const routes: Routes = [
  { path: '', component: WallsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [WallsComponent, WallschildComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class WallsModule {}
