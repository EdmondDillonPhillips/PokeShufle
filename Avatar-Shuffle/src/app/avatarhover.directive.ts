import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAvatarhover]'
})
export class AvatarhoverDirective {

  @Input('appAvatarhover') backgroundColor: string = 'gray';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(){
    this.renderer.setStyle(this.el, 'backgroundColor', this.backgroundColor);
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.hoverEffect(this.backgroundColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverEffect(null);
  }

  private hoverEffect(color: string){
    let element = this.el.nativeElement;
    this.renderer.setStyle(element, 'backgroundColor', color);
    this.renderer.setStyle(element, 'height', '2fr');

     //this.el.nativeElement.style.backgroundColor = color;
     //this.el.nativeElement.style.height = 400;
   }

}
