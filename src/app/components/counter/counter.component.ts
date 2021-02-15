import { Component, OnInit } from '@angular/core';
import { StringCounterService } from 'src/app/services/string-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor(private StringConter: StringCounterService) {}

  textData: string = '';

  limit: number = 0;
  count: number = 0;
  limitDiff: number = 0;

  ngOnInit(): void {
    this.limit = this.StringConter.getLimit();
    if (this.limit !== 0) {
      this.limitDiff = this.StringConter.handleLimitDif(0);
    }
  }

  handleChange(event: any): void {
    //AO APERTAR ESPAÇO, BACKSPACE E LETRA V
    if (event.keyCode == 32 || event.keyCode == 8 || event.keyCode == 86) {
      this.StringConter.setText(event.target.value);

      this.count = this.StringConter.countWords();
      if (this.limit > 0) {
        this.limitDiff = this.StringConter.handleLimitDif(this.count);
      }
    }
  }
}
