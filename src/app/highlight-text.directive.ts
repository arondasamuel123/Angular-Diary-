import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {




  constructor(private elem: ElementRef) { }
  tcolor = 'None';

  private highlightText(tcolor: string) {
    this.elem.nativeElement.style.background = tcolor;

  }

  @HostListener('dblclick') onDoubleClicks() {
    if (this.tcolor === 'None') {
      this.tcolor = 'yellow';
    } else {
      this.tcolor = 'None';
    }

    this.highlightText(this.tcolor);


}
}
