import { api } from "../config/api";

export const gamesLoader = async ()=>{
 try {
        const res = await api.get('/games',{
        params:{
            key:'ec81cd95eecd4503b6a93d6001c82694'
        }
    })

    return res
 } catch (error) {
    console.log(error.message)
 }
}


export const gameDeatilsLoader = async ({params})=>{
try {
    console.log(params)
      
  const res = await api.get(`/games/${params.id}`,{
    params:{
        key:'ec81cd95eecd4503b6a93d6001c82694'
    }
  })

  return res 
} catch (error) {
    
}
}

