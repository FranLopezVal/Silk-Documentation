import { Component, Input } from '@angular/core';
import { VERSION } from '../../../versions';

@Component({
  selector: 'app-base-documentation',
  standalone: true,
  imports: [],
  templateUrl: './base-documentation.component.html',
  styleUrl: './base-documentation.component.css'
})
export abstract class BaseDocumentationComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() version?: VERSION;
  @Input() minVersion?: VERSION;
  @Input() date?: string;
  @Input() author?: string;

  constructor() {
    this.author = 'Silk Framework Team';
    this.date = Date.parse('2024-06-01').toString();
  }
}
