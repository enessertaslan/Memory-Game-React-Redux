import React, { useEffect } from 'react'
import Card from '../Card'
import { useDispatch } from 'react-redux';
import { CardsArray, ShuffleCards } from '../../redux/memoryCardSlice'
import './index.css'
function List() {
 
  
  return (
    <div className='list'>
        <Card></Card>
    </div>
  )
}

export default List