import React from 'react'


const Button = ({name}) => {
    return (
        <div>
            <button className='px-5 m-2 bg-slate-200 rounded-lg'>{name}</button>
        </div>
    )
}

export default Button