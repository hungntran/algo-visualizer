import React from "react";

const AlgorithmDetail = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-x-4">
      <div className="p-4 border-2 border-primary-600 rounded-md mb-4">
        <p className="mb-2">
          <b>Bubble sort</b> is a simple sorting algorithm that repeatedly steps through the list,
          compares adjacent elements and swaps them if they are in the wrong order. The pass through
          the list is repeated until the list is sorted. The algorithm, which is a comparison sort,
          is named for the way smaller or larger elements "bubble" to the top of the list.
        </p>
      </div>

      <div className="p-4 border-2 border-primary-600 rounded-md mb-4 shrink-0">
        <table className="w-full">
          <tbody>
            <tr>
              <td>Worst-case</td>
              <td className="font-semibold">
                O(n<sup>2</sup>)
              </td>
            </tr>
            <tr>
              <td>Average</td>
              <td className="font-semibold">
                O(n<sup>2</sup>)
              </td>
            </tr>
            <tr>
              <td>Best-case</td>
              <td className="font-semibold">O(n)</td>
            </tr>
            <tr>
              <td>Space complexity</td>
              <td className="font-semibold">O(n)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlgorithmDetail;
