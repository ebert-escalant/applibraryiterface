import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
	images: any[] = [
		{source:'assets/Sliders/1.png', alt:'Description for Image 1'},
		{source:'assets/Sliders/2.jpg', alt:'Description for Image 2'},
		{source:'assets/Sliders/3.jpg', alt:'Description for Image 3'},
		{source:'assets/Sliders/4.jpg', alt:'Description for Image 4'},
		{source:'assets/Sliders/5.jpg', alt:'Description for Image 5'}
	]

	collections: any[] = []
	constructor(
		private bookService: BookService
	) {}

	loading: boolean = true

	ngOnInit() {
		this.bookService.getCollections().subscribe(data => {
			this.collections = data.collections
			this.loading = false
		})
	}
}
