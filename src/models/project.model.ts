export type ProjectAction = {
  type:
    | 'FULL_UPDATE'
    | 'UPDATE_TASK'
    | 'UPDATE_POSTS'
    | 'DELETE_TASK'
    | 'TOGGLE_TASK_DONE'
    | 'ADD_BULK_KEYWORDS'
    | 'ADD_KEYWORD'
    | 'EDIT_KEYWORD'
    | 'DELETE_KEYWORD';
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
  id?: string;
  projectType?: 'SCRAPED' | 'GPT';
  name: string;
  stage: any;
  posts: PostData[];
};

export type Action = {
  action: string;
  finished: boolean;
};
