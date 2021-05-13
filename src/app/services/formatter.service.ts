import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  constructor() {}

  /**
   * 2020-01-01 --> 01.01.2020
   * @param internationalDate Datum, welches konvertiert werden soll
   */
  public formatIntrnationDateToGerman(internationalDate: string): string {
    let parts = internationalDate.split('-');
    if (parts.length == 3) {
      return parts[2] + '.' + parts[1] + '.' + parts[0];
    } else {
      console.error(
        'formatIntrnationDateToGerman',
        'Übergebenes Datum hat das falsche Format',
        internationalDate
      );

      return '01.01.1900';
    }
  }
}
