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
     * @param {Function} callback 
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
}