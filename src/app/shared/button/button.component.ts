import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() odds: number = 0.00;
  @Input() flag?: string;

  @Output() buttonClick = new EventEmitter<Event>();

  // onClick(event: Event): void {
  //   this.buttonClick.emit(event);
  // }
}
