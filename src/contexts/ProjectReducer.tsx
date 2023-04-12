import type { ProjectAction, ProjectData } from '@/models/project.model';

export default function projectReducer(
  state: ProjectData,
  action: ProjectAction
) {
  switch (action.type) {
    case 'FULL_UPDATE':
      return action.payload;
    case 'UPDATE_POSTS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
}
