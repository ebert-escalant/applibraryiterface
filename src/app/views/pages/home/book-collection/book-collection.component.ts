import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {
	@Input() collection!: any
	responsiveOptions = [
		{
			breakpoint: '1280px',
			numVisible: 3,
			numScroll: 1
		},
		{
			breakpoint: '768px',
			numVisible: 2,
			numScroll: 1
		},
		{
			breakpoint: '640px',
			numVisible: 1,
			numScroll: 1
		}
	]

	books: any[] = []

	constructor(private router: Router) { }

	ngOnInit() {
		this.books = this.collection.books
	}

	goBookDetail(id: string) {
		this.router.navigate(['books', id])
	}
}
