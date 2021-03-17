import React from 'react';
import './App.css';
// import Grid from './components/Grid'
import Cell from './components/Cell'

function App() {

  const gridSize = 3;

  const [modelArr, setModelArr] = React.useState<any[]>([]);
  const [hasWonState, setHasWonState] = React.useState(false);



  React.useEffect(() => {
    // MODEL:

    // Define cell object
    class CellObj {
      constructor(public value: string, public x: number, public y: number) {
      }
    }

    // create 3x3 empty array
    const tempArr = new Array(gridSize);
    for (let i = 0; i < gridSize; i++) {
      tempArr[i] = new Array(gridSize);
    }

    // Populate array with cell objects with blank values
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        let newCellObject = new CellObj("", j, i);
        console.log(newCellObject);
        tempArr[i][j] = newCellObject;
      }
    }
    setModelArr(tempArr);
    console.log(tempArr);
  }, []);

  const handleClick = (row: number, column: number) => {
    // For now, just cycling through possible values.
    const tempArr2 = modelArr;
    if (tempArr2[row][column].value === "") {
      tempArr2[row][column].value = "X"
    } else if (tempArr2[row][column].value === "X") {
      tempArr2[row][column].value = "O"
    } else if (tempArr2[row][column].value === "O") {
      tempArr2[row][column].value = ""
    }
    setModelArr(tempArr2)

    // Detect if a win
    for (let i = 0; i < gridSize; i++) {
      console.log("I ran out of time noooooooooo!")
    }
  }


  // VIEW: 

  // Create view ready for render
  let displayedCells = modelArr.map((currentVal: object[], indexRow: number) => {
    currentVal.map((currentValCell: any, indexCol: number) => {
      return <Cell value={currentValCell.value} handleClick={handleClick} row={indexRow} column={indexCol} />;
    })
  });


  return (
    <div className="App">
      {displayedCells}
    </div>
  );
}

export default App;
