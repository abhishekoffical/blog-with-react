import React from 'react'
import { useId } from 'react'
function Select(
    {options,
        label,
        className='' ,
        ...props
    }

  ,ref) 
{
    const id =useId()
  return (
    <div className='w-full'>
     {label && <label className='text-black hover:text-red-800' htmlFor={id}>{label}</label>}
     <select
    {...props}
   id= {id}
   ref={ref} 
   className={`px-2 py-3 rounded-lg bg-amber-50 text-black outline-none focus:bg-gray-300
    duration-200 border border-gray-200 w-full ${className}`}>
        {options?.map((option)=>(
            <option key={option} value={option}>{option}</option>
        ))}
    </select>
    </div>
    
  )
}

export default React.forwardRef(Select)