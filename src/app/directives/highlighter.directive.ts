import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hpHighlighter]',
})
export class HighlighterDirective {
  constructor(element: ElementRef) {
    console.log(element);
    element.nativeElement.innerText = 'Directive text';
  }
}
