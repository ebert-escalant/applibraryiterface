import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	@Output() toggleSidebar = new EventEmitter<void>()
	menuOpen: boolean = false;

	constructor() { }

	toggleSidebarMenu() {
		this.toggleSidebar.emit()
	}
}
