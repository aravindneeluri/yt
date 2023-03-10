import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { HAMB_URL, YOUTUBE_SEARCH_URL, YT_LOGO_URL } from '../Constants/constants'
import { toggleMenu } from '../utils/navSlice';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState('');
    //const [searchSuggestions, setSearchSuggestions] = useState([])

    useEffect(() => {
        const getSearchSuggestions = async () => {
            console.log("API_CALL-" + searchQuery);

            const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery)
            const json = await data.json()
            console.log(json);

        }
        const timer = setTimeout(() => getSearchSuggestions(), 200);
        return () => clearTimeout(timer);
    }, [searchQuery])

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())

    }
    return (
        <div className='border border-zinc-400 p-2 flex '>
            <div className='flex col-span-2'>

                <img onClick={() => toggleMenuHandler()}
                    className='w-10 p-2 my-2 cursor-pointer' alt='menu' src={HAMB_URL} />

                <a href="/">
                    <img className='w-28  my-2' alt='YT-l' src={YT_LOGO_URL} />
                </a>
            </div>
            <div>
                <div className='justify-center py-2 m-2 px-44  col-span-10 '>
                    <input type='text' placeholder='Search' className='px-32 border border-gray-900 rounded-l-2xl align-'
                        value={searchQuery}
                        onChange={((e) => setSearchQuery(e.target.value))}
                    />
                    <button className=' bg-slate-100 px-2 border border-gray-900 rounded-r-2xl '>Search</button>
                </div>
                <div className='px-56   '>
                    <ul className='hover:bg-slate-300'>
                        <li>cisac</li>
                        <li>csugdvsiv</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header