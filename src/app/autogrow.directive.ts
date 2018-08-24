
import { Directive, HostListener, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[autogrow]'
})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    @HostListener('focus') onfocus() {
        this.focuses(true);
    }

    @HostListener('blur') onblur() {
        this.focuses(false);
    }

    focuses(shouldFocus: boolean) {
        if(shouldFocus) {
            this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
        }
    }
}