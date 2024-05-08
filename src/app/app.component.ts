import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ConsultaApiService } from './consulta-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  dividendo: any;
  divisor: any;
  resultado: any;
  erro: any;

  constructor(private service: ConsultaApiService) {}

  consultarCalcApi() {
    console.warn('Fez algo!');
    if (this.dividendo.trim() !== '' && this.divisor.trim() !== '') {
      this.service.getCalcApi(this.dividendo, this.divisor).subscribe({
        next: (data: any) => {
          console.log(data);
          console.log(typeof data);
          this.resultado = data.resultado;
          this.erro = data.erro;
        },
        error: (error: any) => {
          console.error('Erro ao realizar divisão:', error);
          this.resultado = null;
          this.erro = null;
        },
      });
    }
  }
}
