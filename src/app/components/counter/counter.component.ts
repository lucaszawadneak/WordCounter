import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StringCounterService } from 'src/app/services/string-counter.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, OnDestroy {
  constructor(private StringConter: StringCounterService) {}

  textData: string = '';

  limit: number = 0;
  count: number = 0;
  limitDiff: number = 0;

  searchEntry: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.limit = this.StringConter.getLimit();
    if (this.limit !== 0) {
      this.limitDiff = this.StringConter.handleLimitDif(0);
    }

    //APENAS EXECUTA AS AÇÕES APÓS 300ms DO ULTIMO EVENTO
    this.searchEntry.pipe(debounceTime(300)).subscribe((data) => {
      this.StringConter.setText(data);

      this.count = this.StringConter.countWords();
      if (this.limit > 0) {
        this.limitDiff = this.StringConter.handleLimitDif(this.count);
      }
    });
  }

  ngOnDestroy(): void {
    this.searchEntry.unsubscribe();
  }

  handleChange(event: any): void {
    this.searchEntry.next(event.target.value);
  }
}
