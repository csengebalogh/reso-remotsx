import React, { useState, useEffect } from 'react';
import { selectClip, connectClip, getClipsByLayerId } from '../services/resolumeService';
import { components } from "../services/schema";

type Clip = components["schemas"]["Clip"];

interface Props {
    edit: Clip
}

const Editor: React.FC<Props> = ({ edit }) => {
    const [editing, setEditing ] = useState<boolean>(false)
    const [clip, setClip] = useState<Clip>({})

    useEffect(() => {
        console.log("Clip editing mode!");
        console.log("Editing: ", edit);

        setEditing(true)
        setClip(edit)

        if (clip.thumbnail?.last_update == '0') {
            console.log("nincs indexkéep");
            
        }
        // loadThumbnail(edit.id)
        
        // layoutParams()
        
    }, [])

    const loadThumbnail = async (clipId:number) => {

    }


    const updateClip = async () => {

    }

    const layoutParams = () => {
        console.log(edit.thumbnail);
        
    }

    const handleParamChange = async () => {

    }



    return null 

}



export default Editor

