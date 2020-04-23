'use strict'

// import Table from './table.js'
import TableWithHeaders from './tableWithHeaders.js';
import TableEditable from './tableEditable.js';

// const table = new Table(document.body, 'table1');

// var number = 0;

// function print(cell) {
//     ++number;
//     cell.innerText = number.toString(); 
// }

// working
// table.insertRows(-1, 4, 2, print);
// table.insertRows(-1, 4, 2, print);
// table.insertRows(-1, 4, 2, print);
// table.insertRows(-1, 4, 2, print);

// // working
// table.insertColumns(3, 4, print);

// // working
// table.deleteRow(2);


// works
// table.deleteColumn(2);

// const table = new TableWithHeaders(document.body, 'table1');
// let columns = 4;

// table.createHeaderRow(columns);
// table.insertRows(-1, 4, 1);
// table.insertRows(-1, 4, 1);
// table.insertRows(-1, 4, 1);
// table.insertRows(-1, 4, 1);

const table = new TableEditable(document.body, 'table');

let print = (function () {
    let i = 0;
    return function(cell) {
        cell.innerText = `cell ${i/2}`;
        ++i;
    }
})();

let columns = 4;

table.createHeaderRow(columns, print);
table.insertRows(0, columns, 10, print);

// table.sortColumn(1, 1, table.getNumberOfRows());