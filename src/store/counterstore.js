import {create} from 'zustand'


export const usecounter = create((set)=>({

    counter:10,
    addcounter:()=>set((state)=>({counter:state.counter+1})),
    removecounter:()=>set((state=>({ counter:state.counter-1}))),
    resetvalue:()=>set((state)=>({counter:0}))






}))