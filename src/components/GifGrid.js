import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
//import { getGif } from './helpers/getGifs'

export const GifGrid = ({category}) => {
 
//  const [images, setImages] = useState([])
    const {data:images,loading} = useFetchGifs(category);
    
   
    return (
    <>
        <h3>{category}</h3>

        {loading && <p>loading</p> }

        <div className='card-grid'>
            

                {   
                    images.map((e) => {
                    return <GifGridItem 
                    key={e.id}
                    {...e}/>
                    })
                }
            
        </div>
    </>
  )
}
