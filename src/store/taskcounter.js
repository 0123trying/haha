import{create} from 'zustand'

export const useTaskStore= create((set)=>({
    task:[],

    addtask:(task)=>
        set((state)=>
            ({task:[...state.task,task]})),
    removetask: (taskToRemove) =>
        set((state) => 
            ({ task:state.task.filter((currval)=> taskToRemove != currval),
        })),
    
    resettask: ()=>
        set(()=>
            ({task:[]

            
        }))





}))