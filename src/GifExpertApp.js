

import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  
 
  
 const [categories,setCategories] = useState(['Samurai X'])
    
//  const handleAdd = () => {
//    const newString = ['ZXDZ']
   
//    setCategories(categories.concat(newString))
//    // setCategories(newString , ...categories)
//    // setCategories(cats => [...cats, newString])
//  } 
 return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>


        <hr/>

      
        <ol>
            {
                categories.map(category => 
                   <GifGrid 
                   category={category}
                   key={category}
                   />
                )
            }
        </ol>
    </>
  )
}
