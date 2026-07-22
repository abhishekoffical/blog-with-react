import React from 'react'
import { useId } from 'react'
const Input =React.forwardRef(function Input({
    label,
    type="text",
     className='',
    ...props

},ref){
    const id =useId(),
    return (
        
        <div className='w-full'>
         {label&& <label className='inline-block mb-1 pl-1' htmlFor={id}>
            {label}
         </label>}
         <input
            type={type}
            className={`px-2 py-3 bg-white rounded-lg text-black border-none focus:bg-gray-50
            duration-200 border border-gray-200 w-full   ${className=''}`}
            {...props}
            id={id}
            ref={ref}
         />
        </div>
    )
})

export default Input