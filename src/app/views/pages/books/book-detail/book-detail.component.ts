import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { faStar, faHeart, faBook } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
	id!: string | null;
	book!: any;
	loading: boolean = true;
	faStar = faStar;
	faHeart = faHeart;
	faBook = faBook;
	private sub!: Subscription;

	constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.sub = this.router.events.subscribe((event: any) => {
			if (event instanceof NavigationEnd) {
				this.id = this.route.snapshot.paramMap.get('id');
				this.getBook();
			}
		});

		this.id = this.route.snapshot.paramMap.get('id');
		this.getBook();
	}

	getBook() {
		this.bookService.getCollections().subscribe(data => {
			data.collections.forEach((collection: any) => {
				collection.books.forEach((book: any) => {
					if (book.id === this.id) {
						this.book = book;
						this.loading = false;
					}
				});
			})
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
