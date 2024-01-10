import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [NgClass, NgStyle, NgFor, NgIf, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {
  estilo: string = "disable"
  corFundo: string = "blue"
  corDaFonte: string = "yellow"
  item: string = ""
  lista: string[] = []
  isEnableBlock: boolean = true

  adicionarLista() {
    this.lista.push(this.item)
  }

  trocar() {
    if (this.estilo === "disable") {
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }
}
