import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventListComponent } from './event-list/event-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
