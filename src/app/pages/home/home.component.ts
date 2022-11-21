import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  croatiaScore = '0';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.croatiaScore = '1', 3000)
  }

  captureClick(event: Event): void {
    console.log('IT WORKED', event);
  }
}
