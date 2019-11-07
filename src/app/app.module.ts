import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PayrollSearchComponent } from './payroll/payroll-search.component';

import { SharedModule } from './shared/shared.module'; /*104-4*/
@NgModule({
  declarations: [ // include here all the components names(class) to show(selector) in the html
    AppComponent, PayrollSearchComponent],
    imports: [SharedModule /*104-4*/, BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
