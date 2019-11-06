import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PayrollSearchComponent } from './payroll/payroll-search.component';
import { SearchBoxComponent } from './search/search-box.component'; // import to put in declarations

@NgModule({
  declarations: [ // include here all the components names(class) to show(selector) in the html
    AppComponent,
    SearchBoxComponent,
    PayrollSearchComponent

  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
