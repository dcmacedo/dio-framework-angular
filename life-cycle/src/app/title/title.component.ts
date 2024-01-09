import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-title',
	standalone: true,
	imports: [],
	templateUrl: './title.component.html',
	styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
	nome: string = 'Danilo';

	ngOnInit(): void {
		this.nome = `Olá ${this.nome}`;
	}

}
