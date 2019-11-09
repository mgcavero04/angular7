import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PaversSearchComponent } from './pavers-search.component';

const paversRoutes: Routes = [
  { path: '', component: PaversSearchComponent }
];
@NgModule({
  declarations: [PaversSearchComponent],
  exports: [PaversSearchComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(paversRoutes)]
})
export class PaversModule {



}
