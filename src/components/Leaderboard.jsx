import React from 'react'
import CustomizedTables from './CustomizedTables'

const Leaderboard = () => {
  return (
    <div
        className='
            flex
            flex-col 
            justify-center 
            items-center 
        '
    >
        <div
            className='
                my-10
                text-[2rem]
                font-bold
            '
        >
            <h1>Leaderboard</h1>           
        </div>
        <div
            className='
                flex 
                justify-center 
                items-center 
                w-[90vw]
                h-[80vh]
            '
        >
            <CustomizedTables />
        </div>
    </div>
  )
}

export default Leaderboard