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

    const [ clipId, setClipId ] = useState<number>(0)

    useEffect(() => {
        const fetch = async () => {
          try {
            const response = await retrieveClipParams(clipId)
            // displayClip(response)
            console.log(response);
            
          } catch (error) {
            console.error('Error fetching composition', error);
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