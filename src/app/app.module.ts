import { BrowserModule } from '@angular/platform-browser';
import { counterReducer } from './counter.reducer';

import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
