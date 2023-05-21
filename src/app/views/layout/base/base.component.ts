import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
	sidebarVisible: boolean = false
	collections: any[] = []
	searchValue: string = ''
	selectedBookId: string = ''

	loading: boolean = false

	constructor(private bookService: BookService, private router: Router) {}

	toggleSidebar() {
		this.sidebarVisible = !this.sidebarVisible
	}

	ngOnInit() {}

	changeSearchValue() {
		if (this.searchValue.trim() === '') {
			this.collections = []
			return
		}

		this.loading = true

		this.bookService.getCollections().subscribe((data: any) => {
			this.collections = data.collections.filter((collection: any) => {
				collection.books = collection.books.filter((book: any) => {
					return book.title.toLowerCase().includes(this.searchValue.toLowerCase())
				})
				return collection.books.length > 0
			})

			this.loading = false
		})
	}
}
