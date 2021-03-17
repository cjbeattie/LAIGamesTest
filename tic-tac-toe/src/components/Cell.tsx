import React from 'react';

const Cell = () => {
    const [value, setValue] = React.useState("X");

    return (
        <div className="cell">{value}</div>
    )
}

export default Cell;