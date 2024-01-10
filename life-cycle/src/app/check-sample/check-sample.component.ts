import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-check-sample',
	standalone: true,
	imports: [],
	templateUrl: './check-sample.component.html',
	styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

	quantidade: number = 0

	adicionar() {
		this.quantidade += 1
	};

	subtrair() {
		this.quantidade -= 1
	};

	ngDoCheck(): void {
		console.log("ngDoCheck");
	};

	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	};

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	};

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	};

	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	};

	ngOnInit(): void {
		console.log("ngOnInit");
	};

	ngOnDestroy(): void {
		console.log("goodbye my friend");
	};
}
