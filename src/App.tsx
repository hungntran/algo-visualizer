import React, { useState } from "react";
import SortingVisualizer, { SortingTrace } from "components/SortingVisualizer";
import bubbleSort from "algorithms/sorting/BubbleSort";

const arr = [3, 14, 8, 23, 4, 6, 9];

function App() {
  const [trace, setTrace] = useState<SortingTrace[]>([]);
  const handleClick = () => {
    setTrace(bubbleSort(arr));
  };

  return (
    <div className="App">
      <SortingVisualizer sourceNumbers={arr} trace={trace} />
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default App;
