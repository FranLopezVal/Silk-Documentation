import { Component } from '@angular/core';


@Component({
    selector: 'app-loader',
    standalone: true,
    imports: [],
    template:`
    <div class="loader-wrapper">     
        <span class="loader"></span>
    </div>
    `,
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
    constructor() { }

}