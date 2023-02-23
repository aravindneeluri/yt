import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const isMenuOpen = useSelector ((store) => store.app.isMenuOpen)

    if(!isMenuOpen) return null;
  return (
    <div className="p-2">
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <ul>
            <h1 className='font-semibold'>Subscriptions</h1>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <ul>
            <h1 className='font-semibold'>Watch Later</h1>
            <li>Music</li>
            <li>Sports</li>
            <li>Songs</li>
        </ul>
    </div>
  )
}

export default SideBar