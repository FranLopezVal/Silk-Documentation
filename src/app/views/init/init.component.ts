import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: '0',
        transform: 'translateY(-100%)'
      })),
      state('*', style({
        opacity: '1',
        transform: 'translateY(0)'
      })),
      transition('void => *', animate('1500ms ease-in-out'))
    ])
  ],
})
export class InitComponent {

}
