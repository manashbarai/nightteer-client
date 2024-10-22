import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useGlobalSkills } from '../context/skillContext';

const PreviousPage = () => {
  const { state, result_Month } = useGlobalSkills();
  
  const [selectState, setSelectState] = useState({
    id: state && state.length > 0 ? state[0].id : "",
    name: state && state.length > 0 ? state[0].name : "",
    result: state && state.length > 0
      ? result_Month.filter((result) => result.id === state[0].id)
      : []
  });

  console.log("selectState", selectState);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">

        {/* Buttons to select state */}
        <ul className='flex my-5 gap-2'>
          {state && state.map((s, i) => {
            return (
              <li key={i}>
                <button
                  className='py-2 px-5 bg-sky-50 border-sky-200 border rounded'
                  onClick={() => {
                    setSelectState((prev) => ({
                      ...prev,
                      id: s.id,
                      name: s.name,
                      result: result_Month.filter((r) => r.id === s.id)
                    }));
                  }}
                >
                  {s.name}
                </button>
              </li>
            );
          })}
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
              selectState.result[0].resultList &&
              selectState.result[0].resultList.map((result, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-blue-50`}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">{result.day}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">{result.result_1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">{result.result_2}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PreviousPage;
