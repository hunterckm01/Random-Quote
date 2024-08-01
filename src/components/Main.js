import React from 'react'
import CardsQuotes from './CardsQuotes'
import { MyContext } from '../ContextApi/MyContext'
import { useContext } from 'react'

const Main = () => {

  const {quote, generateNew, addtoList, savedQuotes} = useContext(MyContext);

  return (
    <div className='w-full h-full'>
        <div className='flex flex-col max-w-[1000px] mx-auto bg-green-300 py-[2rem] gap-[1rem] rounded-2xl mt-[40px]'>
            <div className='text-3xl font-semibold text-center'>Random Quotes</div>
            <div className='text-center max-w-[70%] mx-auto text-slate-900 '><CardsQuotes quote = {quote}/></div>
            <div className='w-full max-w-[1000px] mx-auto flex items-center justify-center gap-6 text-xl font-bold text-slate-200'>
                <button onClick={generateNew} className='px-2 py-1 bg-green-800 rounded-lg hover:bg-green-700 hover:text-slate-900 transition-all duration-200'>New Quote</button>
                <button onClick={addtoList} className='px-2 py-1 bg-green-800 rounded-lg hover:bg-green-700 hover:text-slate-900 transition-all duration-200'>Save Quotes</button>
            </div>
        </div>
    </div>
  )
}

export default Main
