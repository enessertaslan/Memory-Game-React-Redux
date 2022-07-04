import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ScoreDown, ScoreUp, TurnCard } from '../../redux/memoryCardSlice'
import { MatchCard,CardsArray,ShuffleCards } from '../../redux/memoryCardSlice'
// import CardBack from '../../../public/images/card-back.png'
import './index.css'

function Card() {
let dispatch=useDispatch();
const items= useSelector((state) => state.memory.items);
const [firstCard,setFirstCard]=useState(null);
const [secondCard,setSecondCard]=useState(null);

useEffect(() => {
  dispatch(CardsArray());
  dispatch(ShuffleCards());
}, [dispatch])

useEffect(()=>{
  if(firstCard && secondCard)
  {
 if(firstCard.src===secondCard.src)
  {
    dispatch(ScoreUp());
    dispatch(MatchCard({src:firstCard}));
    reset();
  }else{
    dispatch(ScoreDown());
    setTimeout(()=>dispatch(TurnCard({id:secondCard.id})),1000)
    setTimeout(()=>dispatch(TurnCard({id:firstCard.id})),1000)
    setTimeout(()=>reset(),300)
  }
  }
 
},[dispatch,firstCard,secondCard])
const handleTurn=(item)=>{
  firstCard ? setSecondCard(item) : setFirstCard(item);

  dispatch(TurnCard({id:item.id}))

  
}
const reset=()=>{
  setFirstCard(null);
  setSecondCard(null);
}
  return (
    <div className='list'>
      {items.map((item,index)=>(
        <div key={index} className={item.isOpen===true ? 'card-checked' : 'card'}   >
          <div className='card-inside' onClick={()=>handleTurn(item)} >
          <div className='card-front'>
              <img src='images/card-back.png' width='100px' height='50px' alt="" />
          </div>
          <div className="card-back" >
              <img src={item.src} width='150px' height='170px' alt="" />
          </div>
        </div>
        </div>
      ))}

    
    </div>
  )
}

export default Card