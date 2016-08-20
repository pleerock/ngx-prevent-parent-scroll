# ng2-prevent-parent-scroll

Prevents scrolling in the parent container when child container already has a scroll.

## Installation

1. Install npm module:
    
    `npm install ng2-prevent-parent-scroll --save`

2. If you are using system.js you may want to add this into `map` and `package` config:

    ```json
    {
        "map": {
            "ng2-prevent-parent-scroll": "node_modules/ng2-prevent-parent-scroll"
        },
        "packages": {
            "ng2-prevent-parent-scroll": { "main": "index.js", "defaultExtension": "js" }
        }
    }
    ```

## Usage

```html
<div preventParentScroll [preventParentScrollDisabled]="false">
    ... some content that can be scrolled ...
</div>
```

* **[preventParentScrollDisabled]="true|false"** - if true is given then this component will be disabled.

## Sample

```typescript
import {Component} from "@angular/core";
import {PreventParentScroll} from "ng2-prevent-parent-scroll";

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
export class App {

    items: number[] = [];

    constructor() {
        for (let i = 0; i < 1000; i++) {
            this.items.push(i);
        }
    }

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ng2-prevent-parent-scroll/tree/master/sample) for more examples of
usages.
