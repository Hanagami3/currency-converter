import { Component, OnInit } from '@angular/core';
import { CurrencyConversionResponse } from '../../interfaces/currency-conversion-response';
import { ConverterService } from '../../services/converter.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-converter',
    standalone: true,
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.css'],
    imports: [FormsModule]
})

export class ConverterComponent implements OnInit {
    constructor(private converterService: ConverterService) { }
    currencyResponse?: CurrencyConversionResponse;
    amountToConvert: number = 1;
    fromCurrency: string = 'USD';
    toCurrency: string = '';
    convertedAmount: number = 0;
    onSubmit() {
        if (this.currencyResponse) {
            const rate = this.currencyResponse.rates[this.toCurrency];
            if (rate) {
                this.convertedAmount = this.amountToConvert * rate;
            } else {
                console.error(`Exchange rate for ${this.toCurrency} not found.`);
            }
        }
    }

    ngOnInit(): void {
        this.getCurrencyData();
    }
    private getCurrencyData() {
        this.converterService.getCurrencyData().subscribe({
            next: (response: CurrencyConversionResponse) => {
                this.currencyResponse = response;
                console.log(response);
            },
            error: (error) => {
                console.error('Error fetching currency data:', error);
                console.error('Error message:', error.message);
            }
        });
    }
}