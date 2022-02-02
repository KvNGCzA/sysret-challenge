import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: 'regular' | 'stripped' | 'round' | 'display' = 'regular';
  @Input() text = 'Enter Button Text';
  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  public get buttonClass(): string {
    return `btn ${this.type}`;
  }

  ngOnInit(): void {
  }
}
