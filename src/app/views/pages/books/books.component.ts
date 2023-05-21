import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

import { faSearch, faTimes, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';



@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
	faSearch = faSearch
	faTimes = faTimes
	faCheck = faCheck
	faCircle = faCircle
	farCircle = farCircle

	categories = [
		'Fiction',
		'Latin American Literature',
		'Classic Literature',
	]

	languages = [
		'English',
		'Spanish'
	]

	publishers = [
		'Seix Barral',
		'Francisco de Robles'
	]

	collections = [
		'Grandes clásicos',
		'Clásicos contemporáneos',
	]

	years = [
		'2015',
		'2016',
		'2017',
		'2018',
		'2019',
		'2020',
		'2021',
		'2022',
		'2023'
	]

	books: any[] = []
	loading: boolean = true
	searchValue: string = ''

	selectedCategory: string = 'all'
	selectedLanguage: string = 'all'
	selectedPublisher: string = 'all'
	selectedCollection: string = 'all'
	selectedYear: string = 'all'

	constructor(private bookService: BookService, private router: Router) {}

	ngOnInit() {
		this.bookService.getCollections().subscribe((data: any) => {
			this.books = data.collections[0].books

			this.loading = false;
		})
	}

	selectCategory(category: string) {
		this.selectedCategory = category

		this.filterData()
	}

	selectLanguage(language: string) {
		this.selectedLanguage = language

		this.filterData()
	}

	selectYear(year: string) {
		this.selectedYear = year

		this.filterData()
	}

	selectCollection(collection: string) {
		this.selectedCollection = collection

		this.filterData()
	}

	selectPublisher(publisher: string) {
		this.selectedPublisher = publisher

		this.filterData()
	}

	filterData() {
		this.books = []
		this.loading = true

		this.bookService.getCollections().subscribe((data: any) => {
			data.collections.forEach((collection: any) => {
				if(this.selectedCollection !== 'all' && this.selectedCollection !== collection.title) return

				[...this.books] = collection.books.filter((book: any) => {
					const category = this.selectedCategory === 'all' ? true : book.categories.includes(this.selectedCategory)
					const language = this.selectedLanguage === 'all' ? true : book.details.language === this.selectedLanguage
					const publisher = this.selectedPublisher === 'all' ? true : book.details.publisher === this.selectedPublisher
					const year = this.selectedYear === 'all' ? true : book.details.since.includes(this.selectedYear)
					const search = this.searchValue.trim() === ''? true : book.title.includes(this.searchValue)

					return category && language && publisher && collection && year && search
				})
			})

			this.loading = false
		})

		this.loading = false
	}

	goBookDetail(id: string) {
		this.router.navigate(['books', id])
	}
}
