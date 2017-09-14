import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { HelloEweComponent } from './hello-ewe.component';

describe('HelloEweComponent', () => {
    let component: HelloEweComponent;
    let dom: any;
    let fixture: ComponentFixture<HelloEweComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HelloEweComponent ]
        });
        fixture = TestBed.createComponent(HelloEweComponent);
        component = fixture.componentInstance;

        dom = fixture.nativeElement;
    }));

    test('should exist', () => {
        expect(component).toBeDefined();
    });

    test('should have a default name', () => {
        expect(component.name).toBe('Matt');
    });

    test('should output a <p> with "Baaaa, {{ name }}!"', () => {
        fixture.detectChanges(); // renders the dom
        expect(dom.innerHTML).toBe('<p>Baaaa, Matt!</p>');
    });
});
