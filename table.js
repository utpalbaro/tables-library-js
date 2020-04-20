'use strict'

/**
 * @class This Table class will have one and only one <tbody>
 */
export default class Table {
    /**
     * 
     * @param {HTMLElement} parent 
     * @param {string} tableId 
     */
    constructor(parent, tableId) {
        this._table         =   document.createElement('table');
        this._table.id      =   tableId;

        // tbody is mandatory
        this._tBody         =   this._table.createTBody();

        parent.appendChild(this._table);
    }

    /**
     * Header row will always be added at the top of the table
     * @param {number} nColumns 
     * @param {Function} callBack 
     */
    insertHeaderRow(nColumns, callBack) {
        let tHead = this._table.createTHead();

        // Create single tr element. Not using insertRow because
        // I want to append at the end of tHead
        let newRow = document.createElement('tr');

        // create th elements
        for (let i = 0; i < nColumns; ++i) {
            let newCell = document.createElement('th');
            newRow.appendChild(newCell);

            if (callBack)
                callBack(newCell);

        }

        tHead.appendChild(newRow);

        return newRow;
    }

    /**
     * Inserts one row to the <tbody>
     * @param {number} rowIdx 
     * @param {number} nColumns 
     * @param {Function} callBack 
     */
    insertRow(rowIdx, nColumns, callBack) {
        let newRow = this._tBody.insertRow(rowIdx);
        this.insertCells(newRow, 0, nColumns, callBack);

        return newRow;
    }

    /**
     * <td> cells will be created at each row
     * @param {HTMLElement} rowElement 
     * @param {number} nColumns 
     */
    insertCells(rowElement, columnIdx, nColumns, callBack) {
        for (let i = 0; i < nColumns; ++i, ++columnIdx) {
            let newCell = rowElement.insertCell(columnIdx);

            if (callBack)
                callBack(newCell);
        }
    }
}