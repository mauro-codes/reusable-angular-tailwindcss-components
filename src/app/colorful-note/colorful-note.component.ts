import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'colorful-note',
	templateUrl: './colorful-note.component.html',
	styleUrls: ['./colorful-note.component.css']
})
export class ColorfulNoteComponent implements OnInit {

	@Input() color: string = "teal"
	@Input() title: string
	@Input() description: string

	constructor() { }

	ngOnInit() {
	}

}
