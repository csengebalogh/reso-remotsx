import React, { useState, useEffect } from 'react';
import { selectClip, connectClip, getClipsByLayerId, clearClip } from '../services/resolumeService';
import { components } from "../services/schema";
import Editor from './Editor';

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

    const handle = async (clip: any) => {
        try {
            const result = await selectClip(clip.id)
            await setSelected(result)
            console.log("Selected!", result);

        } catch (error) {
            console.error('Error updating clips', error);


        }
    }

    const handleConnect = async (clip: any) => {
        try {
            const res = await connectClip(clip.id)
            if (res.status == 204)    console.log("Connected!", res);
            await setSelected(res)

        } catch (error) {
         console.error("Not conn", error);
            
        }
    }

    const handleClear = async (clip: any) => {
        try {
            const res = await clearClip(clip.id)            
            await setSelected(res)

            console.log("Cleared!", res);

        } catch (error) {
            console.error("Not conn", error);
        }
    }


    return (
        <div>
            <div className="list-group">
                <div className='row p-3 bg-light' >

                    
                    <div className="col-6 dropdown">
                        <button className="btn btn-secondary borderlist-group-item list-group-item-action" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Select Clip
                        </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button onClick={() => handleConnect(selected)} className='col-md-4 mx-2 btn btn-outline-secondary'>Connect Clip</button>
                        <button onClick={() => handleClear(selected)} className='col-md-4 mx-2 btn btn-outline-danger'>Clear Clip</button>
                    </div>

                </div>
                <div className="collapse" id="collapseExample">
                    {clips?.map((clip: any) => (
                        <a key={clip.id} role='button' onClick={() => handle(clip)} href="#" className="list-group-item list-group-item-action" data-bs-toggle="collapse" data-bs-target="#collapseExample">
                            <li className="list-group-item">{clip.name?.value}</li>
                        </a>
                    ))}
                </div>
            </div>

            {selected != null ?
                <div className="editor">
                    <Editor edit={selected} />
                </div> : ""}


        </div>
    );
};

export default DropDownClips;
