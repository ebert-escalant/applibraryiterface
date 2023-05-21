import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { BookCollectionComponent } from './book-collection/book-collection.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}
];

@NgModule({
	declarations: [
		HomeComponent,
  BookCollectionComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		CarouselModule
	],
})
export class HomeModule { }
