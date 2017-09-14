import { TestBed } from '@angular/core/testing';

import { NameService } from './name.service';

describe('NameService', () => {
    let service: NameService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ NameService ]
        });
        service = TestBed.get(NameService);
    });

    test('should exist', () => {
        expect(service).toBeDefined();
    });

    test('should have a name getter', () => {
        expect(service.name).toBe('Matt');
    });

    test('#setName should set the private name', () => {
        service.setName('Goku');
        expect(service.name).toBe('Goku');
    });
});
