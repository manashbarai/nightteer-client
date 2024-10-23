import React from 'react'
import { useGlobalSkills } from '../context/skillContext'
import StateCard from './dashboard/state/StateCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Clock from '../components/Clock'
import DateDisplay from '../components/DateModule'

const HomePage = () => {

    const { state, result_day } = useGlobalSkills()
    
    return (
        <>
        <Navbar/>
        <div className='mt-5'>

            <h1 className='text-3xl text-center font-semibold' >Today Result</h1>

        <div className='flex justify-center  flex-wrap items-center gap-5'>
          <DateDisplay/> <div className='none lg:block'> || </div>    <Clock/>  
        
        </div>
        </div>
        <div className='px-2 lg:px-28 grid grid-cols-1 gap-5 lg:gap-20 my-10 '>
            {result_day && state && result_day.map((r, i) => {
                const singleState=state.find(s=>s.id===r.id)
                const data = {
                    name: singleState.name,
                    id: singleState.id,
                    color: {
                        rotate: singleState.color.rotate,
                        backgroundColor1: singleState.color.backgroundColor1,
                        backgroundColor2: singleState.color.backgroundColor2,
                        textColor: singleState.color.textColor,
                        borderColor: singleState.color.borderColor,
                    },
                    time: {
                        firstResult: singleState.time.firstResult,
                        secondResult: singleState.time.secondResult,
                    },
                    description:singleState.description

                }
                const resultData = {
                    day: r.day || new Date().getDate(),
                    result_1: r.result_1 || " Wait For Result ... ",
                    result_2: r.result_2 || " Wait For Result ... ",
                    month: r.month || new Date().getMonth() + 1, 
                    year: r.year || new Date().getFullYear() 
                };
                return <div className='w-full lg:w-3/4 mx-auto'>
                    <StateCard formData={data} key={resultData.day}  resultData={resultData} />

                </div>
            })}

        </div>
<Footer/>
        </>
    )
}

export default HomePage
