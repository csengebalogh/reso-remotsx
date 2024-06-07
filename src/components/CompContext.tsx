import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface Layer {
  id: number;
  name: string;
}

interface Composition {
  bypassed: boolean;
  layers: Layer[];
}

type CompositionAction = 
  | { type: 'SET_COMPOSITION'; payload: Composition }
  | { type: 'UPDATE_BYPASSED'; payload: boolean }
  | { type: 'UPDATE_LAYER'; payload: { id: number; changes: Partial<Layer> } };

interface CompositionState {
  composition: Composition | null;
}

const initialState: CompositionState = {
  composition: null,
};

const CompositionContext = createContext<{
  state: CompositionState;
  dispatch: React.Dispatch<CompositionAction>;
}>({ state: initialState, dispatch: () => null });

const compositionReducer = (state: CompositionState, action: CompositionAction): CompositionState => {
  switch (action.type) {
    case 'SET_COMPOSITION':
      return { ...state, composition: action.payload };
    case 'UPDATE_BYPASSED':
      if (state.composition) {
        return { 
          ...state, 
          composition: { ...state.composition, bypassed: action.payload } 
        };
      }
      return state;
    case 'UPDATE_LAYER':
      if (state.composition) {
        return {
          ...state,
          composition: {
            ...state.composition,
            layers: state.composition.layers.map(layer =>
              layer.id === action.payload.id ? { ...layer, ...action.payload.changes } : layer
            ),
          },
        };
      }
      return state;
    default:
      return state;
  }
};

export const CompositionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(compositionReducer, initialState);

  return (
    <CompositionContext.Provider value={{ state, dispatch }}>
      {children}
    </CompositionContext.Provider>
  );
};

export const useComposition = () => useContext(CompositionContext);
