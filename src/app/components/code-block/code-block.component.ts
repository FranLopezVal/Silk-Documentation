import { Component, Input, OnChanges } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';

declare var Prism: any;

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [],
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css']
})
export class CodeBlockComponent implements OnChanges {
  @Input() code?: string;
  @Input() language: string = 'csharp';
  formattedCode?: string;

  constructor() { }

  ngOnInit(): void {
    this.formattedCode = Prism.highlight(this.code, Prism.languages[this.language], this.language);
  }
  ngOnChanges() {
    this.formattedCode = Prism.highlight(this.code, Prism.languages[this.language], this.language);
  }

  ngOnDestroy(): void {
    this.formattedCode = '';
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.code || '').then(() => {
    }, (err) => {
      console.error('Failed to copy to clipboard', err);
    });
  }
}