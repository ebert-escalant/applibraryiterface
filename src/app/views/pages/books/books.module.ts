import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		component: BooksComponent
	},
	{
		path: ':id',
		component: BookDetailComponent
	}
];

@NgModule({
  declarations: [
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
	RouterModule.forChild(routes),
	FontAwesomeModule,
	FormsModule
  ]
})
export class BooksModule { }
