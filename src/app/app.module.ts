import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RedditSearchComponent } from './reddit-search/reddit-search.component';


// import { PaversSearchComponent } from './pavers/pavers-search.component';
import { SharedModule } from './shared/shared.module'; /*104-4*/


const directives: any[] = [
  AppComponent,

];

@NgModule({

  declarations: [ // include here all the components names(class) to show(selector) in the html
    AppComponent, directives, RedditSearchComponent],
    imports: [SharedModule /*104-4*/, BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})



export class AppModule {}
