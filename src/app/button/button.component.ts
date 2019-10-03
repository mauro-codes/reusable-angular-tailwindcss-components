import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

	@Input() type: string = 'simple'
	@Input() color: string = 'teal'
	@Input() text: string
	constructor() { }

	ngOnInit() {
	}

	getStyles() {
		switch(this.type) {
			case 'simple': 
				return `bg-${this.color}-500 hover:bg-${this.color}-700 text-white font-bold py-2 px-4 rounded mb-2 border border-${this.color} mx-2`
			case 'outline':
				return `hover:bg-${this.color}-500 text-${this.color}-700 font-semibold hover:text-white py-2 px-4 border border-${this.color}-500 hover:border-transparent rounded mb-2 mx-2`
		}
	}

}
