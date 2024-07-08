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
        opacity: '0', //translateY(20%) scale(0) 
        transform: 'translateY(20%) scale(0) '
      })),
      state('*', style({
        opacity: '1', //translateY(0) scale(1)
        transform: '//translateY(0) scale(1)'
      })),
      transition('void => *', animate('2500ms cubic-bezier(.0,2,.6,1)'))
    ])
  ],
})
export class InitComponent {

}
