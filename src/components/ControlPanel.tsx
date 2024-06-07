import React, { useState, useEffect } from 'react';
import { retrieveComp, updateComp, connectClip } from '../services/resolumeService';
import {components} from "../services/schema";

type Composition = components["schemas"]["Composition"];


const ControlPanel: React.FC = () => {
  const [composition, setComposition] = useState<Composition | null>(null)




  const handleStartClip = async () => {
    try {
      const result = await connectClip(1, 1); // Example deckId and clipId
      console.log('Clip started successfully', result);
    } catch (error) {
      console.error('Error starting clip', error);
    }
  };

  return (
    <div>
      <button onClick={handleStartClip}>Start Clip</button>
    </div>
  );
};

export default ControlPanel;
