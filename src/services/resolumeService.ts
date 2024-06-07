import axios from 'axios';
type Clip = components["schemas"]["Clip"];
import { components } from "../services/schema";



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

export const updateComp = async (changes: any) => {
  try {
    console.log(changes);

  } catch (error) {
    console.error('Error updating comp', error);

  }
}

// Returns a single layer and all of its clips
export const layerByIndex = async (layerIndex: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/composition/layers/${layerIndex}`);
    console.log("Layer info by index", response.data);
  } catch (error) {
    console.error('Error retrieving layer by index', error);
    throw error;
  }
}

// Returns all of the clips of a layer (empty ones also)
export const getClipsByLayerId = async (layerId: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/composition/layers/by-id/${layerId}`);
    return response.data.clips
  } catch (error) {
    console.error('Error retrieving clips by layer id', error);
    throw error;


  }
}

// Select a single clip and its effects
export const selectClip = async (id: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/composition/clips/by-id/${id}/select`);
    const editable = await retrieveClipParams(id)
    if (response.status == 204) return editable

  } catch (error) {
    console.error('Error selecting clip', error);
    throw error;
  }
}

// Connect the clip by id
export const connectClip = async (id: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/composition/clips/by-id/${id}/connect`);
    const editable = await retrieveClipParams(id)
    if (response.status == 204) return editable

  } catch (error) {
    console.error('Error connecting clip', error);
    throw error;
  }
};

// Clear the clip by id
export const clearClip = async (id: number) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/composition/clips/by-id/${id}/clear`);
    const editable = await retrieveClipParams(id)
    if (res.status == 204) return editable
    
  } catch (error) {
    console.error('Error clearing clip', error);
    throw error;
  }
};


// Retrieve all clip information and associated effects
export const retrieveClipParams = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/composition/clips/by-id/${id}`);

    return response.data
  } catch (error) {
    console.error('Error retrieving clip', error);
    throw error;
  }
}


// Add more functions to interact with other endpoints
