import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8080/api/v1';

export const retrieveComp = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/composition`);
    console.log("Compod: ", response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error retrieving composition', error);
    throw error;
  }
}

export const updateComp = async (changes:any) => {
  try {
    console.log(changes);
    
  } catch (error) {
    console.error('Error updating comp', error);

  }
}

// Connect the clip by its position in the clip grid
export const connectClip = async (layerIndex: number, clipIndex: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/composition/layers/${layerIndex}/clips/${clipIndex}/connect`);

    return response.data;
  } catch (error) {
    console.error('Error starting clip', error);
    throw error;
  }
};

// Retrieve all clip information and associated effects
export const retrieveClipParams = async(clipId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/composition/clips/by-id/${clipId}`);
    console.log("Clip details:", response.data);
    
    return response.data
  } catch (error) {
    console.error('Error retrieving clip', error);
    throw error;
  }
}

// Add more functions to interact with other endpoints
