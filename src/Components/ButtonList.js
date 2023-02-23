import React from 'react'
import Button from './Button'

// const list = ["All", "Sports", "Gaming", "Music" ,"Comedy" , "Movies", "Cricket", "Fifa", "Hockey", "News", ]

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name = "All"/>
        <Button name = "Sports"/>
        <Button name = "Gaming"/>
        <Button name = "Music"/>
        <Button name = "Comedy"/>
        <Button name = "Movies"/>
        <Button name = "Cricket"/>
        <Button name = "Fifa"/>
        <Button name = "Hockey"/>
        <Button name = "News"/>
        <Button name = "Series"/>
    </div>
  )
}

export default ButtonList