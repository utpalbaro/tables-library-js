'use strict'

/**
 * @class This Table class will have one and only one <tbody>
 */
export default class Table {
    /**
     * Creates an empty <table> element
     * @param {HTMLElement} parent - Parent to attach to
     * @param {string} tableId - Table ID
     */
    constructor(parent, tableId) {
        this._table         =   document.createElement('table');
        this._table.id      =   tableId;

        // tbody is mandatory
        this._tBody         =   this._table.createTBody();

        parent.appendChild(this._table);
    }

    /**
     * Insert cell(s) to any given row
     * @param {HTMLElement} rowElement 
     * @param {number} columnIdx 
     * @param {number} nColumns 
     * @param {Function} callBack 
     */
    _insertCells(rowElement, columnIdx, nColumns, callBack) {
        for (let i = 0; i < nColumns; ++i, ++columnIdx) {
            let newCell = rowElement.insertCell(columnIdx);

            if (callBack)
                callBack(newCell);
        }
    }

    /**
     * Inserts one row to the <tbody>. 
     * Only for this function, it matters where you are putting the <tr>
     * @param {number} rowIdx 
     * @param {number} nColumns 
     * @param {number} nRows 
     * @param {Function} callBack 
     */
    insertRows(rowIdx, nColumns, nRows, callBack) {
        for (let i = 0; i < nRows; ++i, ++rowIdx)
        {
            let newRow = this._tBody.insertRow(rowIdx);
            this._insertCells(newRow, 0, nColumns, callBack);
        }
    }

    /**
     * Loops through all the rows of the table
     * @param {number} columnIndex 
     * @param {number} nColumns 
     * @param {Function} callBack 
     */
    // Only one function needed to add one or multiple columns
    // as it is faster to add multiple cells within one row
    insertColumns(columnIndex, nColumns, callBack) {
        for (let i = 0; i < this._table.rows.length; ++i) {
            let rowElement = this._table.rows[i];
            this._insertCells(rowElement, columnIndex, nColumns, callBack);
        }
    }

    /**
     * Delete one row
     * @param {number} rowIdx 
     */
    // Cannot have deleteRows only because of the similar reason as in
    // deleteColumns
    deleteRow(rowIdx) {
        this._table.deleteRow(rowIdx);
    }

    /**
     * Delete columns at given index.
     * @param {number} columnIdx  
     */
    // Cannot have one deleteColumns only because as soon as I delete one 
    // cell, the index gets changed.
    deleteColumn(columnIdx) {
        for (let i = 0; i < this._table.rows.length; ++i) {
            this._table.rows[i].deleteCell(columnIdx);
        }
    }

    /**
     * Delete the entire table
     */
    deleteTable() {
        this._table.remove();
        this._table = undefined;
    }

    getNumberOfRows() {
        return this._table.rows.length;
    }

    /**
     * 
     * @param {number} rowId 
     */
    getNumberOfColumns(rowId) {
        return this._table.rows[rowId].cells.length;
    }
}