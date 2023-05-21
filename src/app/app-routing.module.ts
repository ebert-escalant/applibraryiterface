import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'books',
				loadChildren: () => import('./views/pages/books/books.module').then(m => m.BooksModule)
			},
			{ path: '**', redirectTo: '' }
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
