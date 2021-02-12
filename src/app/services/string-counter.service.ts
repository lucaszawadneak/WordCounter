import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCounterService {
  public text: string = '';
  public limit: number = 0;

  constructor() {}

  handleTextChange(data: string): void {
    this.text = data;
  }

  setLimit(limit: number): void {
    this.limit = limit;
    console.log('Limite setado para ' + limit);
  }

  countWords(): number {
    let splitString = this.text.trim().replace(/\n/g, ' ').split(' ');
    const filteredArray = splitString.filter((item) => item !== '');
    return filteredArray.length;
  }

  handleLimitDif(words: number): number {
    return this.limit - words;
  }
}
