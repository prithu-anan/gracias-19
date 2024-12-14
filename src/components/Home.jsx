import React from 'react'
import { Link } from 'react-router'

const Home = () => {
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
                xl:mt-[3vh]
                mt-[17vh]
                mb-10
                text-[1.7rem]
                font-bold
            '
        >
            <h1>Welcome beloved seniors!</h1>
        </div>
        <div
            className='
                xl:w-[50vw]
                w-[90vw]
            '
        >
            <img src="/CSELand-Hunt.JPG" alt="" />
        </div>
        <div
            className='
                mt-10
                text-[1.2rem]
            '
        >
            <h1>Want to run it back one more time?</h1>
        </div>
        <div className='submit'>
            <Link to={localStorage.getItem('username') ? '/puzzle' : '/login'}><button>Let's Go!</button></Link>
        </div>
    </div>
  )
}

export default Home