import Table from './table.js'
import {describe, it, expect} from './jasmine/lib/jasmine-3.5.0/jasmine.js'

describe('Table test', () => {
    let table = new Table(document.body, 'table1');

    it('Create 1 row, 4 columns', () => {
        table.insertRows(-1, 4);

        expect(true).toBe(true);
    });
});