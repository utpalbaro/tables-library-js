'use strict'

import Table from './table.js'

const table = new Table(document.body, 'table1');

var number = 0;

function print(cell) {
    ++number;
    cell.innerText = number.toString(); 
}

// working
table.insertRows(-1, 4, 2, print);
table.insertRows(-1, 4, 2, print);
table.insertRows(-1, 4, 2, print);
table.insertRows(-1, 4, 2, print);

// // working
// table.insertColumns(3, 4, print);

// // working
// table.deleteRow(2);


// works
table.deleteColumn(2);