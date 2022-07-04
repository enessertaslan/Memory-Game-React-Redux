import { createSlice } from "@reduxjs/toolkit";
export const memorySlice=createSlice({
    name:'memory',
    initialState:{
        point:0,
        round:0,
        matchedCount:0,
        items:[
            // {
            //     id:1,
            //     title:'Book',
            //     img:'s',
            //     matchId:1,
            //     isOpen:false,
            // },
            // {
            //     id:2,
            //     title:'Pencil',
            //     img:'s',
            //     matchId:2,
            //     isOpen:false,
            // },
            // {
            //     id:3,
            //     title:'Guitar',
            //     img:'s',
            //     matchId:3,
            //     isOpen:false,
            // },
            // {
            //     id:4,
            //     title:'Drum',
            //     img:'s',
            //     matchId:4,
            //     isOpen:false,
            // },
            // {
            //     id:5,
            //     title:'Saxophone',
            //     img:'s',
            //     matchId:5,
            //     isOpen:false,
            // },
            // {
            //     id:6,
            //     title:'Keyboard',
            //     img:'s',
            //     matchId:6,
            //     isOpen:false,
            // },
            // {
            //     id:7,
            //     title:'Television',
            //     img:'s',
            //     matchId:7,
            //     isOpen:false,
            // },
            // {
            //     id:8,
            //     title:'Headphone',
            //     img:'s',
            //     matchId:8,
            //     isOpen:false,
            // },
            // {
            //     id:9,
            //     title:'Mouse',
            //     img:'s',
            //     matchId:9,
            //     isOpen:false,
            // },
            // {
            //     id:10,
            //     title:'Phone',
            //     img:'s',
            //     matchId:10,
            //     isOpen:false,
            // },
            // {
            //     id:11,
            //     title:'Joystick',
            //     img:'s',
            //     matchId:11,
            //     isOpen:false,
            // },
            // {
            //     id:12,
            //     title:'Harmonica',
            //     img:'s',
            //     matchId:12,
            //     isOpen:false,
            // },
            // {
            //     id:13,
            //     title:'Chair',
            //     img:'s',
            //     matchId:13,
            //     isOpen:false,
            // },
            // {
            //     id:14,
            //     title:'Drawer',
            //     img:'s',
            //     matchId:14,
            //     isOpen:false,
            // },
            // {
            //     id:15,
            //     title:'Table',
            //     img:'s',
            //     matchId:15,
            //     isOpen:false,
            // },
            // {
            //     id:16,
            //     title:'Book',
            //     img:'s',
            //     matchId:1,
            //     isOpen:false,
            // },
            // {
            //     id:17,
            //     title:'Pencil',
            //     img:'s',
            //     matchId:2,
            //     isOpen:false,
            // },
            // {
            //     id:18,
            //     title:'Guitar',
            //     img:'s',
            //     matchId:3,
            //     isOpen:false,
            // },
            // {
            //     id:19,
            //     title:'Drum',
            //     img:'s',
            //     matchId:4,
            //     isOpen:false,
            // },
            // {
            //     id:20,
            //     title:'Saxophone',
            //     img:'s',
            //     matchId:5,
            //     isOpen:false,
            // },
            // {
            //     id:21,
            //     title:'Keyboard2',
            //     img:'s',
            //     matchId:6,
            //     isOpen:false,
            // },
            // {
            //     id:22,
            //     title:'Television',
            //     img:'s',
            //     matchId:7,
            //     isOpen:false,
            // },
            // {
            //     id:23,
            //     title:'Headphone',
            //     img:'s',
            //     matchId:8,
            //     isOpen:false,
            // },
            // {
            //     id:24,
            //     title:'Mouse',
            //     img:'s',
            //     matchId:9,
            //     isOpen:false,
            // },
            // {
            //     id:25,
            //     title:'Phone',
            //     img:'s',
            //     matchId:10,
            //     isOpen:false,
            // },
            // {
            //     id:26,
            //     title:'Joystick',
            //     img:'s',
            //     matchId:11,
            //     isOpen:false,
            // },
            // {
            //     id:27,
            //     title:'Harmonica',
            //     img:'s',
            //     matchId:12,
            //     isOpen:false,
            // },
            // {
            //     id:28,
                
            //     title:'Chair',
            //     img:'s',
            //     matchId:13,
            //     isOpen:false,
            // },
            // {
            //     id:29,
            //     title:'Drawer',
            //     img:'s',
            //     matchId:14,
            //     isOpen:false,
            // },
            // {
            //     id:30,
            //     title:'Table',
            //     img:'s',
            //     matchId:15,
            //     isOpen:false,
            // },
        ],
    },
    reducers:{
        CardsArray:(state)=>{
            state.items=[];
            for(let i=1;i<16;i++)
            {
                let cards={
                    id:i,
                    src:'images/Cards/'+i+'.png',
                    matched:false,
                    isOpen:false,
                    
                }
                state.items=[...state.items,cards];

            }
        },
        ShuffleCards:(state)=>{
            const tempArr=[...state.items,...state.items]
            .sort(()=>Math.random()-0.5)
            .map((item)=>({...item,id:Math.random()}));
            state.items=tempArr;
        },
        TurnCard:(state,action)=>
        {  
            const {id,title}=action.payload;
            const item=state.items.find(item=>item.id===id)
            item.isOpen===true ? item.isOpen=false : item.isOpen=true ;
        },
        TurnAllCard:(state)=>{
            const item=state.items;
            item.map((item)=>item.isOpen=false)
        },
        MatchCard:(state,action)=>{
            let item=action.payload;
            state.matchedCount++;
            console.log(state.matchedCount)
            const newItems=state.items.map((temp)=>{
                if(item.src===temp.src)
                {
                    
                    return {...temp,matched:true,};
                }else{
                    return temp;
                }
            })
            state.items=newItems;
        },
        ScoreUp:(state)=>{
            state.point+=50;
            state.round++
        },
        ScoreDown:(state,action)=>{
            state.point-=10;
            state.round++
        },
        ResetScore:(state)=>{
            state.point=0;
            state.round=0;
            state.matchedCount=0;
        }
    }
})

export const {TurnCard,MatchCard,ShuffleCards,CardsArray,ScoreUp,ScoreDown,ResetScore,TurnAllCard}=memorySlice.actions;
export default memorySlice.reducer;