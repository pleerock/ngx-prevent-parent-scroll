import {Directive, ElementRef, OnInit, OnDestroy, Input, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@Directive({
    selector: "[preventParentScroll]"
})
export class PreventParentScroll implements OnInit, OnDestroy {

    // -------------------------------------------------------------------------
    // Inputs / Outputs
    // -------------------------------------------------------------------------

    @Input()
    preventParentScrollDisabled: boolean = false;

    // -------------------------------------------------------------------------
    // Private properties
    // -------------------------------------------------------------------------

    private mouseWheelEventHandler = (event: any) => this.onMouseWheel(event);

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(private element: ElementRef) {
    }

    // -------------------------------------------------------------------------
    // Lifecycle Callbacks
    // -------------------------------------------------------------------------

    ngOnInit() {
        const element: Element = this.element.nativeElement;
        element.addEventListener("mousewheel", this.mouseWheelEventHandler);
        element.addEventListener("DOMMouseScroll", this.mouseWheelEventHandler);
    }

    ngOnDestroy() {
        const element: Element = this.element.nativeElement;
        element.removeEventListener("mousewheel", this.mouseWheelEventHandler);
        element.removeEventListener("DOMMouseScroll", this.mouseWheelEventHandler);
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private onMouseWheel(event: any) {
        if (this.preventParentScrollDisabled) return;

        const element: any = this.element.nativeElement,
            scrollTop = element.scrollTop,
            scrollHeight = element.scrollHeight,
            height = element.clientHeight,
            delta = (event.type === "DOMMouseScroll" ? event.detail * -40 : event.wheelDelta),
            up = delta > 0;

        const prevent = function() {
            event.stopPropagation();
            event.preventDefault();
            event.returnValue = false;
            return false;
        };

        if (!up && -delta > scrollHeight - height - scrollTop) {
            // Scrolling down, but this will take us past the bottom.
            element.scrollTop = scrollHeight;
            return prevent();
        } else if (up && delta > scrollTop) {
            // Scrolling up, but this will take us past the top.
            element.scrollTop = 0;
            return prevent();
        }
    }

}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PreventParentScroll,
    ],
    exports: [
        PreventParentScroll,
    ],
})
export class PreventParentScrollModule {

}