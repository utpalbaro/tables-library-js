'use strict'

import Table from './table.js'

const table = new Table(document.body, 'table1');
table.insertHeaderRow(4);

table.insertRow(-1, 4);