import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { PaversSearchComponent } from './pavers/pavers-search.component';
import { SharedModule } from './shared/shared.module'; /*104-4*/


const directives: any[] = [
  AppComponent,

];

@NgModule({

  declarations: [ // include here all the components names(class) to show(selector) in the html
    AppComponent, directives],
    imports: [SharedModule /*104-4*/, BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})



export class AppModule {}
