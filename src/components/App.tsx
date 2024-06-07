import React, { useState, useEffect } from 'react';
import ControlPanel from './ControlPanel';
import { retrieveComp } from '../services/resolumeService';
import { components } from "../services/schema";
import Layer from './Layer';


type Composition = components["schemas"]["Composition"];


const App: React.FC = () => {
  const [composition, setComposition] = useState<Composition | null>(null)


  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await retrieveComp()
        setComposition(response)
      } catch (error) {
        console.error('Error fetching composition', error);
      }
    }

    fetch()
  }, [])



  return (
    <>
      <div className='row h-100'>
        <h1>Resolume Arena Controller</h1>
        <ControlPanel />
        <hr />
        <div className="col-md-6 d-flex flex-column">
          <table className='table table-striped'>
            <thead>
              <th>Layer</th>
              <th>Clips</th>
            </thead>
            <tbody>
              {composition?.layers?.map(layer => (
                <Layer key={layer.id} layer={layer} />
              ))}
            </tbody>
          </table>
        </div>
        
        <div>
          {composition ? (
            <div>
              <pre>{JSON.stringify(composition, null, 2)}</pre>
            </div>

          ) : (
            <p>Loading composition...</p>
          )}
        </div>
      </div>

    </>

  );
};

export default App;
