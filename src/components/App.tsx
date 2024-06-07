import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { retrieveComp } from '../services/resolumeService';
import { components } from "../services/schema";
import MobileLayout from '../core/MobileLayout';
import useViewportWidth from '../hooks/useViewPortWidth';
import DropDownClips from './DropDownClips';


type Composition = components["schemas"]["Composition"];
type Layer = components["schemas"]["Layer"];

const App: React.FC = () => {

  const [composition, setComposition] = useState<Composition | null>(null)
  const isWide = useViewportWidth(1242)

  const [activeLayer, setActiveLayer] = useState<Layer | null>(null)


  useEffect(() => {
    const fetch = async () => {
      try {
        // collect composition on first load
        const comp = await retrieveComp()
        setComposition(comp)

      } catch (error) {
        console.error('Error fetching composition', error);
      }
    }

    fetch()
  }, [])

  useEffect(() => {
    if (!composition || !composition.layers) return;

    for (const l of composition?.layers) {
      if (l.selected?.value) {
        setActiveLayer(l)
        break;
      } else {
        setActiveLayer(composition.layers[0])
      }
    }

  }, [composition])

  useEffect(() => { console.log(activeLayer) }, [activeLayer]);

  return (
    <>
      <div className=''>
        {isWide ? (
          <h1>aaa</h1>
        ) : (<MobileLayout>
          <hr />
          {activeLayer ? <DropDownClips id={Number(activeLayer?.id)}/> : "BÚ BÁ"}
          
          <div className="dropdown p-3 bg-light border">Select Clip</div>
        </MobileLayout>

        )}

      </div>



    </>

  );
};

export default App;
