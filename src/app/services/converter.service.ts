import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CurrencyConversionResponse } from '../interfaces/currency-conversion-response';
import {environment} from "../../environments/environment";
@Injectable({
 providedIn: 'root'
})
export class ConverterService {
 // Hier maken we connectie met onze environment om the gevoelige data op te halen.
 // Een API key is altijd persoonlijk!
 private apiKey = environment.apiKey;
 constructor(private http: HttpClient) {}
 getCurrencyData(): Observable<CurrencyConversionResponse> {
 // Hie maken we connectie met de api. Hoe de endpoints werken kun je vinden in de documentatie van de api die je gebruikt.
 const url: string = `https://openexchangerates.org/api/latest.json?
app_id=${this.apiKey}`;
 return this.http.get<CurrencyConversionResponse>(url);
 }
}