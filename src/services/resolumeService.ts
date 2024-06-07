import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8080/api/v1';

export const retrieveComp = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/composition`);
    
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

export const startClip = async (deckId: number, clipId: number) => {
  try {
    // const response = await axios.post(`${API_BASE_URL}/deck/${deckId}/clip/${clipId}/start`);
    const response = await axios.post(`${API_BASE_URL}/composition/layers/2/clips/4/connect`);

    return response.data;
  } catch (error) {
    console.error('Error starting clip', error);
    throw error;
  }
};

export const retrieveClipParams = async(clipId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/composition/clips/by-id/${clipId}`);
    console.log(response.data);
    
    return response.data
  } catch (error) {
    console.error('Error retrieving clip', error);
    throw error;
  }
}

// Add more functions to interact with other endpoints
