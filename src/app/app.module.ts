import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BoardComponent, ColumnComponent, HeaderComponent } from './components';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BoardComponent, ColumnComponent],
  imports: [BrowserModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
