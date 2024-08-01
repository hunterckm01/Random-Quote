import React, { useContext } from 'react'
import { MyContext } from '../ContextApi/MyContext'

const SavedQuotes = () => {
    const {savedQuotes} = useContext(MyContext);
  return (
    <div className='w-full h-full'>
        {
        savedQuotes.length >= 1 ? 
        (
            <div className='w-full mt-10 max-w-[1000px] mx-auto bg-green-300 py-[20px] rounded-2xl'>
            <div className='max-w-[720px] mx-auto leading-10 text-left '>{savedQuotes.map((element , index) => (<div key = {index} className='text-lg'>{index+1 + ".  " + element}</div>) )}</div>
            </div>
        )
        : 
        (
            <div className='mt-10 max-w-[1000] text-3xl text-center mx-auto'>No Data Saved</div>
        )
    }
    </div>
  )
}

export default SavedQuotes
