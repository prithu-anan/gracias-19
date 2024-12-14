import React from 'react'

const Puzzle = () => {
  return (
    <div
        className='
            flex 
            justify-center 
            items-center 
            xl:w-[25vw]
            l:w-[70vw]
            w-[70vw] 
            xl:h-[70vh]  
            l:h-[70vh]
            h-[500px]
            xl:mt-[15vh]
            l:mt-[10vh]
            mt-[15vh]
            puzzle
        '
    >
        <form>
            <div className='flex justify-center font-bold text-[1.6rem]'>
                <h1>Puzzle Level: 01</h1>
            </div>
            <div>
                <img className='mt-4' width='100%' src='/ohornish-19.jpg' alt='puzzle'/>
            </div>
            <div className='form-group'>
                <label htmlFor='answer' className='labels'>Answer</label>
                <input type='answer' id='answer' className='textfield'/>
            </div>
            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Puzzle