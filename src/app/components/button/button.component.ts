import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: 'regular' | 'stripped' | 'round' | 'display' | 'round secondary' = 'regular';
  @Input() text = 'Enter Button Text';
  @Input() value!: any;
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<any>();

  public get buttonClass(): string {
    return `btn ${this.type}`;
  }
}
