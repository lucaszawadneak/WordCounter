import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  writing: boolean = false;

  handleWriting(): void {
    console.log('test');
    this.writing = !this.writing;
  }
}
