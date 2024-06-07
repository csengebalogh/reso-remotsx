import React, { useState, useEffect } from 'react'
import { components } from "../services/schema";
import { retrieveClipParams } from '../services/resolumeService';

interface Clip {
    clip: components["schemas"]["Clip"]
}

interface Layer {
    layer: components["schemas"]["Layer"]

}


const Layer: React.FC<Layer> = ({ layer }) => {

    //Sine Wave loads default, throw no errors in browser
    const [ clipId, setClipId ] = useState<number>(1702178623191)

    useEffect(() => {
        const fetch = async () => {
          try {
            // when clip clicked, collect params by id, set this selected
            const data = await retrieveClipParams(clipId)
            // displayClip(data)
            console.log(data.selected?.value);
            
          } catch (error) {
            console.error('Error retrieving clip', error);
          }
        }
    
        fetch()
      }, [clipId])



    return (
        <tr>
            <td>{layer.id}</td>
            <td className="w-200 h-150 bg-light">{layer.clips?.map((clip:any) => ( 
                    <button key={clip.id} className='btn btn-primary mt-auto' onClick={() => setClipId(clip.id)}>{clip.name?.value}</button>

            ))}</td>
        </tr>
    )
}

export default Layer;