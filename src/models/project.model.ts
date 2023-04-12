import type { GptPost, GptProject } from './gpt-project.model';

export type ProjectAction = {
  type: 'FULL_UPDATE' | 'UPDATE_POSTS' | 'UPDATE_PROJECT';
  payload: any;
};

export type PostData = {
  id: string;
  idx: number;
  keyword: string;
  title?: string;
  outline?: string;
  content?: string;
};

export type ProjectData = {
  project: GptProject;
  posts: GptPost[];
};

export type Action = {
  action: string;
  finished: boolean;
};
