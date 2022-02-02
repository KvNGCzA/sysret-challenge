import {Component, EventEmitter, Input, Output} from '@angular/core';

type ButtonType = 'regular' | 'stripped' | 'round' | 'display' | 'round secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonType = 'regular';
  @Input() text = 'Enter Button Text';
  @Input() value!: any;
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<any>();

  public get buttonClass(): string {
    return `btn ${this.type}`;
  }
}
