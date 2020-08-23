import { Directive, ElementRef, HostListener } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Directive({
  selector: '[appHighlightQuote]',
})
export class HighlightQuoteDirective {
  constructor(private elem: ElementRef) {}
  @HostListener('click') onClicks() {
    this.quoteHighlight('cyan');
  }

  private quoteHighlight(action: string) {
    this.elem.nativeElement.style.backgroundColor = 'cyan';
  }
}
