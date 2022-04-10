import React, { useState } from "react";
import SortingVisualizer from "components/SortingVisualizer";

const arr = [3, 14, 8, 23, 4, 6, 9, 10, 12, 5, 21, 28, 32, 13, 24, 18];

function App() {
  return (
    <div className="App">
      <SortingVisualizer sourceNumbers={arr} />
    </div>
  );
}

export default App;
