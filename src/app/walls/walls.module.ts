import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WallsComponent } from './walls-list-table-view/walls.component';
import { WallschildComponent } from './wallschild/wallschild.component';
import { WallsListComponent } from './walls-list/walls-list.component';

const routes: Routes = [
  { path: '', component: WallsListComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [WallsListComponent, WallsComponent, WallschildComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule]
})
export class WallsModule {}
