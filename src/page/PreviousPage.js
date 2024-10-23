import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useGlobalSkills } from '../context/skillContext';
import { getOrdinalSuffix, monthNames } from './result/MonthArray';

const PreviousPage = () => {
  const { state, result_Month } = useGlobalSkills();

  const [selectState, setSelectState] = useState({
    id: null,
    name: '',
    result: [],
  });

  const [activeStateId, setActiveStateId] = useState(null); // Track the active button

  // Set default to the first state on initial render
  useEffect(() => {
    if (state.length > 0) {
      const defaultState = state[0];
      const defaultResults = result_Month.filter((r) => r.id === defaultState.id);
      setSelectState({
        id: defaultState.id,
        name: defaultState.name,
        result: defaultResults,
      });
      setActiveStateId(defaultState.id); // Set the first state as active by default
    }
  }, [state, result_Month]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">

        {/* Buttons to select state */}
        <ul className="flex my-5 flex-wrap gap-2">
          {state.map((s, i) => (
            <li key={i}>
              <button
                className={`py-2 px-5 border rounded ${
                  activeStateId === s.id
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-sky-50 border-sky-200'
                }`}
                onClick={() => {
                  const newResults = result_Month.filter((r) => r.id === s.id);
                  setSelectState({
                    id: s.id,
                    name: s.name,
                    result: newResults,
                  });
                  setActiveStateId(s.id); // Update the active button
                }}
              >
                {s.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Table displaying results */}
        <h2 className="text-center bg-blue-600 text-white py-2 rounded-t-lg text-lg font-bold">
          {selectState.name || "Not mentioned"}
        </h2>

        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-2 text-center">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-center">F/R</th>
              <th className="border border-gray-300 px-4 py-2 text-center">S/R</th>
            </tr>
          </thead>
          <tbody>
            {selectState.result.length > 0 &&
              selectState.result[0].resultList
                .sort((a, b) => b.day - a.day) // Sort by 'day' in descending order
                .map((result, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                    } hover:bg-blue-50`}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {getOrdinalSuffix(result.day)} {monthNames[selectState.result[0].month - 1]}{' '}
                      {selectState.result[0].year}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-bold">
                      {result.result_1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center font-bold">
                      {result.result_2}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PreviousPage;
