import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {PreventParentScroll} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container" style="height: 2000px;">

    <div style="overflow: auto; background: #CCC; max-height: 200px;" preventParentScroll>
        <div *ngFor="let item of items">
          {{ item }}
        </div>
    </div>
    
</div>
`,
    directives: [
        PreventParentScroll
    ]
})
export class Sample1App {

    items: number[] = [];

    constructor() {
        for (let i = 0; i < 1000; i++) {
            this.items.push(i);
        }
    }

}

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        Sample1App
    ],
    bootstrap: [
        Sample1App
    ]
})
export class Sample1Module {

}

platformBrowserDynamic().bootstrapModule(Sample1Module);