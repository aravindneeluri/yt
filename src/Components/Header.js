import React from 'react'
import { useDispatch } from 'react-redux'
import { HAMB_URL, YT_URL } from '../Constants/constants'
import { toggleMenu } from '../utils/navSlice';

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())

    }
    return (
        <div className='border border-zinc-400 p-2 flex '>
            <div className='flex col-span-2'>
                <a href="/">
                    <img onClick={() => toggleMenuHandler()}
                        className='w-10 p-2 my-2 cursor-pointer' alt='menu' src={HAMB_URL} />
                </a>
                <img className='w-28  my-2' alt='YT-l' src={YT_URL} />
            </div>
            <div className='justify-center py-2 m-2 px-44  col-span-10 '>
                <input type='text' placeholder='Search' className='px-32 border border-gray-900 rounded-l-2xl align-' />
                <button className=' bg-slate-100 px-2 border border-gray-900 rounded-r-2xl '>Search</button>
            </div>
        </div>
    )
}

export default Header