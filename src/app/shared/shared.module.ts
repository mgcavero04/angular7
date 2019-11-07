/*# 104.Workshop for this step

    1* Make a new NgModule
    2* Make a new component
    3* Add the new component to the declarations and exports of the new NgModule
    4* Add the new NgModule to the imports in AppModule
    5* Reference the new component in the template of AppComponent */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchBoxComponent } from './search-box.component';

@NgModule({
  declarations: [SearchBoxComponent], /*104-3*/
  exports: [SearchBoxComponent], /*104-3*/
  imports: [CommonModule]
})
export class SharedModule {} /*104-1*/
