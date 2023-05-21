import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './views/layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookCardComponent } from './components/book-card/book-card.component';

@NgModule({
	declarations: [
		AppComponent,
  BookCardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		LayoutModule,
  		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
