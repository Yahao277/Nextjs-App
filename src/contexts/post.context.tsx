import React, { createContext, useContext, useReducer } from 'react';

import type { GptPost } from '@/models/gpt-project.model';
import type { PostData } from '@/models/project.model';

export type PostContextType = {
  post: GptPost;
  setPost: (post: GptPost) => void;
};

const initialState: GptPost = {
  id: '0',
  idx: 0,
  keyword: 'No seleccionado',
  projectId: '0',
  generatedContent: '',
  content: '',
  status: '',
};

// Reducer
const postReducer = (
  state: GptPost,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'FULL_UPDATE':
      return action.payload;
    default:
      return action.payload;
  }
};

// Context
export const PostContext = createContext<PostContextType | null>(null);

// Provider
export const PostContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [post, dispatch] = useReducer(postReducer, initialState);

  // ComponentDidMouunt
  React.useEffect(() => {}, []);

  const setPost = (newPost: PostData) => {
    dispatch({
      type: 'FULL_UPDATE',
      payload: newPost,
    });
  };

  const values = React.useMemo(
    () => ({
      post, // States que seran visibles en el contexto.
      setPost, // Funciones que son exportadas para manejo externo.
    }),
    [post]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

//
export function usePostContext() {
  const context = useContext(PostContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context as PostContextType;
}

export default usePostContext;
