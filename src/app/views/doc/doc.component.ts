import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block.component';
import { MenuElementComponent } from '../../menu/menu-element/menu-element.component';
import { MenuComponent } from '../../menu/menu.component';
import { gettingstartedComponent } from '../../versions/0.1.6.24/docs/getting-start/gettingstarted.component';
import { RoutingDocsComponent } from '../../versions/0.1.6.24/docs/routing/routing.component';

@Component({
  selector: 'app-doc',
  standalone: true,
  imports: [CodeBlockComponent,
    MenuComponent,
    MenuElementComponent,
    gettingstartedComponent,
    RoutingDocsComponent
  ],
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.css'
})
export class DocComponent {
  
  selectedDocumentation: string = 'gettingstarted';

  IsSelected(doc:string) {
    return doc === this.selectedDocumentation;
  }

  selectDocumentation(doc:string) {
    this.selectedDocumentation = doc;
  }
}
