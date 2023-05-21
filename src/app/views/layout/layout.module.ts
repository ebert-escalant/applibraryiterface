import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';

@NgModule({
	declarations: [
		BaseComponent,
		NavbarComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SidebarModule,
		FormsModule
	]
})
export class LayoutModule { }
