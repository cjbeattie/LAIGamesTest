import React from 'react';

const Cell = (props: any) => {
    const [value, setValue] = React.useState(props.value);



    return (
        <div className="cell" onClick={props.handleClick(props.row, props.column)}>{value}</div>
    )
}

export default Cell;