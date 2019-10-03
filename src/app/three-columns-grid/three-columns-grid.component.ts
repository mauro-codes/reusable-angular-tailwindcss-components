import { Component, OnInit } from '@angular/core';
import { Article } from '../entities/article';

@Component({
	selector: 'app-three-columns-grid',
	templateUrl: './three-columns-grid.component.html',
	styleUrls: ['./three-columns-grid.component.css']
})
export class ThreeColumnsGridComponent implements OnInit {

	items: Article[] = [
		{
			title: "Lorem ipsum dolor sit amet",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
			imgUrl: "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?cs=srgb&dl=cold-conifer-dawn-917494.jpg&fm=jpg",
			link: "https://dev.to"
		},
		{
			title: "Lorem ipsum dolor sit amet",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
			imgUrl: "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?cs=srgb&dl=cold-conifer-dawn-917494.jpg&fm=jpg",
			link: "https://dev.to"
		},
		{
			title: "Lorem ipsum dolor sit amet",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
			imgUrl: "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?cs=srgb&dl=cold-conifer-dawn-917494.jpg&fm=jpg",
			link: "https://dev.to"
		},
		{
			title: "Lorem ipsum dolor sit amet",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
			imgUrl: "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?cs=srgb&dl=cold-conifer-dawn-917494.jpg&fm=jpg",
			link: "https://dev.to"
		},
		{
			title: "Lorem ipsum dolor sit amet",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
			imgUrl: "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?cs=srgb&dl=cold-conifer-dawn-917494.jpg&fm=jpg",
			link: "https://dev.to"
		},
		{
			title: "Lorem ipsum dolor sit amet",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
			imgUrl: "https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?cs=srgb&dl=cold-conifer-dawn-917494.jpg&fm=jpg",
			link: "https://dev.to"
		},
	]

	constructor() { }

	ngOnInit() {
	}
}
