import React, { createContext, useContext, useReducer } from 'react';

import type { GptPost, GptProject } from '@/models/gpt-project.model';
import type { ProjectData } from '@/models/project.model';

import projectReducer from './ProjectReducer';

export type ProjectContextType = {
  data: ProjectData;
  setProject: (project: GptProject) => void;
  setPosts: (posts: GptPost[]) => void;
  addBulkKeywords: (keywords: GptPost[]) => void;
  addKeyword: (keyword: GptPost) => void;
  editKeyword: (keyword: GptPost) => void;
  deleteKeyword: (id: string) => void;
  toggleTaskDone: (id: string) => void;
};

const initialProject: GptProject = {
  id: '0',
  idx: 0,
  stage: 'CREATED',
  name: 'No',
  jobStatus: '',
};

const initialData: ProjectData = {
  project: initialProject,
  posts: [
    {
      id: '0',
      idx: 0,
      keyword: 'No seleccionado',
      projectId: '0',
      done: false,
    },
  ],
};

// Context
export const ProjectContext = createContext<ProjectContextType | null>(null);

// Provider
export const ProjectContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, dispatch] = useReducer(projectReducer, initialData);

  // ComponentDidMouunt
  React.useEffect(() => {}, []);

  const setData = (projectData: ProjectData) => {
    dispatch({
      type: 'FULL_UPDATE',
      payload: projectData,
    });
  };

  const setPosts = (posts: GptPost[]) => {
    dispatch({
      type: 'UPDATE_POSTS',
      payload: posts,
    });
  };

  const setProject = (project: GptProject[]) => {
    dispatch({
      type: 'UPDATE_PROJECT',
      payload: project,
    });
  };

  const values = React.useMemo(
    () => ({
      data, // States que seran visibles en el contexto.
      setData,
      setProject,
      setPosts, // Funciones que son exportadas para manejo externo.
    }),
    [data]
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
