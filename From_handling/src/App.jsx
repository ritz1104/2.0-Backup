import React from 'react'
import { useState } from 'react'

const App = () => {
 
  const [name, setName] = useState('')
 const [age, setAge] = useState('')

 const [formData, setformData] = useState([])

  const submitHandler = (e)=>{
      e.preventDefault()
 
      const newArr = [...formData]
      newArr.push({name,age})
      setformData(newArr);

  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form onSubmit={submitHandler} className='w-60 h-60 bg-gray-300 rounded-md flex flex-col items-center justify-center gap-5'>
        <input value={name} onChange={(e)=>{
          setName(e.target.value)
        }} className='border p-2 rounded-md' type="text" placeholder='Enter your Name' />
        <input value={age} onChange={(e)=>{setAge(e.target.value)}} className='border p-2 rounded-md' type="number" placeholder='Enter Your Age' />
        <input  className='px-8 active:scale-95 py-3 bg-blue-500 rounded-md' type="submit" />
      </form>
      <div>
        {
          formData.map((item)=>(
            <div>
              <h1>{item.name}</h1>
              <h2>{item.age}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
