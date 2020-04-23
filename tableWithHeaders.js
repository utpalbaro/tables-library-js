'use strict'

import Table from './table.js'

/**
 * @todo Logic for implementing sorting etc. should go here
 */
export default class TableWithHeaders extends Table {
    constructor(parent, tableId) {
        super(parent, tableId);

        this._tHead = this._table.createTHead();
    }

    /**
     * 
     * @param {number} nColumns 
     * @callback callback 
     */
    createHeaderRow(nColumns, callBack) {
        let headerRow = this._tHead.insertRow(0);

        for (let i = 0; i < nColumns; ++i) {
            let th = document.createElement('th');
            headerRow.appendChild(th);

            if (callBack)
                callBack(th);
        }
    }

    sortColumn(columnIdx, startRow, endRow, sortCallBack) {
        let list = [];
        for (let i = startRow; i < endRow; ++i) {
            list.push(this._table.rows[i].cells[columnIdx].innerText);
        }

        if (sortCallBack)
            sortCallBack(list);
        else
            list.sort();

        for (let i = startRow; i < endRow; ++i) {
            this._table.rows[i].cells[columnIdx].innerText = list[i - startRow];
        }
    }
}