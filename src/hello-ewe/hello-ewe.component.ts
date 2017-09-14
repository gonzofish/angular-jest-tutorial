import {
    Component
} from '@angular/core';

@Component({
    selector: 'hello-ewe',
    styles: [],
    template: '<p>Baaaa, {{ name }}!</p>'
})
export class HelloEweComponent {
    name = 'Matt';
}
