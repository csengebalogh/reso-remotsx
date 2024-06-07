import React, { useState, useEffect } from 'react';
import { selectClip, connectClip, getClipsByLayerId } from '../services/resolumeService';
import { components } from "../services/schema";

type Clip = components["schemas"]["Clip"];


interface Props {
    id: number
}



const DropDownClips: React.FC<Props> = ({ id }) => {
    const [clips, setClips] = useState<Clip[] | null>([])
    const [selected, setSelected] = useState<Clip | null>(null)

    useEffect(() => {
        console.log("Dropdown loaded");
        extractClips(id)
    }, [])

    useEffect(() => {
        console.log("Clips loaded");
    }, [clips])

    useEffect(() => {
        console.log("Clip selected!");   
    }, [selected])


    const extractClips = async (id: number) => {
        let clips: Clip[] = []
        try {
            const result = await getClipsByLayerId(id)
            for (const clip of result) {
                if (clip.video || clip.audio) {
                    clips.push(clip)
                }
            }
            console.log("Clips: ", clips);
            setClips(clips)

        } catch (error) {
            console.error('Error extracting clips', error);
        }
    }

    const handle = async (clip:any) => {
        try {
            const result = await selectClip(clip.id)
            setSelected(clip)
            console.log("Selected!", result);
            
        } catch (error) {
            console.error('Error updating clips', error);

            
        }
    }


    return (
        <div>

            <div className="list-group">
                <button className="list-group-item list-group-item-action" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Toggle List Group
                </button>
                <div className="collapse" id="collapseExample">
                    {clips?.map((clip:any) => (
                        <a key={clip.id} role='button' onClick={() => handle(clip)} href="#" className="list-group-item list-group-item-action">
                            <li className="list-group-item">{clip.name?.value}</li>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DropDownClips;
