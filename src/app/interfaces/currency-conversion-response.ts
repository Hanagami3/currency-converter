// Dit zal de respons zijn die we krijgen van de api die we gebruiken. Om te weten
//wat voor respons je kunt verwachten, ga je naar de documentatie van de api.
export interface CurrencyConversionResponse {
 disclaimer: string;
 license: string;
 timestamp: number;
 base: string;
 rates: {
 [currencyCode: string]: number;
 };
}
