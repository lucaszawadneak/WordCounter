import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StringCounterService } from 'src/app/services/string-counter.service';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.css'],
})
export class LimitComponent implements OnInit {
  limit: number = 0;

  @Output() onWrite = new EventEmitter<null>();

  constructor(private StringConter: StringCounterService) {}

  ngOnInit(): void {
    this.limit = this.StringConter.limit;
  }

  handleStart() {
    this.onWrite.emit();
    this.StringConter.setLimit(this.limit);
  }
}
