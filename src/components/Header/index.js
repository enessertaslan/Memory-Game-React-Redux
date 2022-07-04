import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CardsArray, ResetScore,ShuffleCards,TurnAllCard } from '../../redux/memoryCardSlice';
import './index.css'
function Header() {
  const points=useSelector(state=>state.memory.point);
  const round=useSelector(state=>state.memory.round);
  const matchedCount=useSelector(state=>state.memory.matchedCount);
  const dispatch=useDispatch();
  console.log(points)
  const handleReset = () => {
    if(window.confirm('Are You Sure ?'))
    {
      dispatch(TurnAllCard())
      dispatch(ResetScore())
      setTimeout(()=>dispatch(CardsArray()),500)
      setTimeout(()=>dispatch(ShuffleCards()),500)
    }
  
  }
  return (
    <div className='header-container'>
        <div className='header'>Memory Game</div>
        <div className='points-round'>
          <div className='points'>Points:{points}</div>
          <div className='reset-button' onClick={()=>handleReset()}>{matchedCount>=15 ? 'Play Again' : 'Reset' }</div>
          <div className='round'>Round:{round}</div>
        </div>
    </div>
  )
}

export default Header