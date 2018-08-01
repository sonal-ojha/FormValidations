import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    render() {
        console.log("props from parent", this.props.dataFromParent)
        const TBody = ( this.props.dataFromParent.length > 0 && this.props.dataFromParent.map((v) => {
            return (
                <div className="dataContainer">
                    <div className="dataItem">{v.name}</div>
                    <div className="dataItem">{v.phone}</div>
                    <div className="dataItem">{v.email}</div>
                    <div className="dataItem">{v.address1}</div>
                    <div className="dataItem">{v.address2}</div>
                    <div className="dataItem">{v.pin}</div>
                </div>
            );
        }))
        return (
            <div className="TableContainer">
                {TBody}
            </div>
        );
    }
}

export default Table;