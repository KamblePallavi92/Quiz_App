import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeBgDirective]'
})
export class ChangeBgDirective {

  @Input() isChecked:Boolean = false;
  constructor(private el:ElementRef,private render:Renderer2) {}
  @HostListener('click') Answer(){
    if(this.isChecked)
    {
      this.render.setStyle(this.el.nativeElement,'background','green');
      this.render.setStyle(this.el.nativeElement,'color','#fff');
      this.render.setStyle(this.el.nativeElement,'border','2px solid grey');
    }

  }

}
