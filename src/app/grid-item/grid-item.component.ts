import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../entities/article';

@Component({
	selector: 'app-grid-item',
	templateUrl: './grid-item.component.html',
	styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {

	@Input() title: string
	@Input() description: string
	@Input() imgUrl: string
	@Input() link: string

	constructor() { }

	ngOnInit() {
	}

}
