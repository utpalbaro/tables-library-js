import TableWithHeaders from "./tableWithHeaders.js"

export default class TableEditable extends TableWithHeaders {

    /**
     * Creates an empty <table> element
     * @param {HTMLElement} parent - Parent to attach to
     * @param {string} tableId - Table ID
     */
    constructor(parent, tableId) {
        super(parent, tableId);
    }

    /**
     * 
     * @param {number} nColumns 
     * @callback callback 
     */
    createHeaderRow(nColumns, callBack) {
        let decoratedCallBack = this._callBackDecorator(callBack);
        super.createHeaderRow(nColumns, decoratedCallBack);
    }

    /**
     * Inserts one row to the <tbody>. 
     * Only for this function, it matters where you are putting the <tr>
     * @param {number} rowIdx 
     * @param {number} nColumns 
     * @param {number} nRows 
     * @callback {callBack} cell 
     */
    insertRows(rowIdx, nColumns, nRows, callBack) {
        let decoratedCallBack = this._callBackDecorator(callBack);
        super.insertRows(rowIdx, nColumns, nRows, decoratedCallBack);
    }

    /**
     * Decorator around callback() functions
     * @callback {callBack} cell
     */
    _callBackDecorator(callBack) {
        return function (cell) {
            cell.setAttribute('contenteditable', 'true');
    
            if (callBack)
                callBack(cell);
        }
    }
}