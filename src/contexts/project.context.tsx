import React, { createContext, useContext, useReducer } from 'react';

import type { GptPost, GptProject } from '@/models/gpt-project.model';
import type { PostData, ProjectData } from '@/models/project.model';

import projectReducer from './ProjectReducer';

export type ProjectContextType = {
  project: GptProject;
  setProject: (project: GptProject) => void;
  setPosts: (posts: GptPost[]) => void;
  addBulkKeywords: (keywords: GptPost[]) => void;
  addKeyword: (keyword: GptPost) => void;
  editKeyword: (keyword: GptPost) => void;
  deleteKeyword: (id: string) => void;
  toggleTaskDone: (id: string) => void;
};

const initialState: GptProject = {
  id: '0',
  idx: 0,
  stage: 'CREATED',
  name: 'No',
  jobStatus: '',
  posts: [],
};

// Context
export const ProjectContext = createContext<ProjectContextType | null>(null);

// Provider
export const ProjectContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [project, dispatch] = useReducer(projectReducer, initialState);

  // ComponentDidMouunt
  React.useEffect(() => {}, []);

  const setProject = (projectData: ProjectData) => {
    dispatch({
      type: 'FULL_UPDATE',
      payload: projectData,
    });
  };

  const setPosts = (posts: PostData[]) => {
    dispatch({
      type: 'UPDATE_POSTS',
      payload: posts,
    });
  };

  const addBulkKeywords = (keywords: PostData[]) => {
    dispatch({
      type: 'ADD_BULK_KEYWORDS',
      payload: keywords,
    });
  };

  const addKeyword = (keyword: PostData) => {
    dispatch({
      type: 'ADD_KEYWORD',
      payload: keyword,
    });
  };

  const editKeyword = (keyword: PostData) => {
    dispatch({
      type: 'EDIT_KEYWORD',
      payload: keyword,
    });
  };

  const deleteKeyword = (id: string) => {
    dispatch({
      type: 'DELETE_KEYWORD',
      payload: id,
    });
  };

  const toggleTaskDone = (id: string) => {
    dispatch({
      type: 'TOGGLE_TASK_DONE',
      payload: id,
    });
  };

  const values = React.useMemo(
    () => ({
      project, // States que seran visibles en el contexto.
      setProject,
      addBulkKeywords,
      addKeyword,
      setPosts,
      editKeyword,
      deleteKeyword,
      toggleTaskDone, // Funciones que son exportadas para manejo externo.
    }),
    [project]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return (
    <ProjectContext.Provider value={values}>{children}</ProjectContext.Provider>
  );
};

//
export function useProjectContext() {
  const context = useContext(ProjectContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context as ProjectContextType;
}

export default useProjectContext;
