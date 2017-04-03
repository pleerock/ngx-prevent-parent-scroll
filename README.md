> This repository is for demonstration purposes of how it can be implemented in Angular and is not maintaned. Please fork and maintain your own version of this repository.

# ngx-prevent-parent-scroll

Prevents scrolling in the parent container when child container already has a scroll.

## Installation

1. Install npm module:
    
    `npm install ngx-prevent-parent-scroll --save`

2. If you are using system.js you may want to add this into `map` and `package` config:

    ```json
    {
        "map": {
            "ngx-prevent-parent-scroll": "node_modules/ngx-prevent-parent-scroll"
        },
        "packages": {
            "ngx-prevent-parent-scroll": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## Usage

Import a `PreventParentScrollModule` module and use directive your html:


```html
<div preventParentScroll [preventParentScrollDisabled]="false">
    ... some content that can be scrolled ...
</div>
```

* **[preventParentScrollDisabled]="true|false"** - if true is given then this component will be disabled.

## Sample

```typescript
import {Component} from "@angular/core";
import {PreventParentScrollModule} from "ngx-prevent-parent-scroll";

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
`
})
export class App {

    items: number[] = [];

    constructor() {
        for (let i = 0; i < 1000; i++) {
            this.items.push(i);
        }
    }

}

@NgModule({
    imports: [
        // ...
        PreventParentScrollModule
    ],
    declarations: [
        App
    ],
    bootstrap: [
        App
    ]
})
export class AppModule {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ngx-prevent-parent-scroll/tree/master/sample) for more examples of
usages.
