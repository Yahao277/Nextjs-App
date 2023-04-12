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
    case 'ADD_BULK_KEYWORDS':
      return {
        ...state,
        posts: [...action.payload, ...state.posts],
      };
    case 'ADD_KEYWORD':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case 'EDIT_KEYWORD':
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        }),
      };
    case 'DELETE_KEYWORD':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case 'UPDATE_TASK': {
      const updatedTask = action.payload;

      const updatedTasks = state.posts.map((task) => {
        if (task.id === updatedTask.id) {
          updatedTask.keyword = task.keyword;
          return updatedTask;
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.posts.filter((task) => task.id !== action.payload),
      };
    case 'TOGGLE_TASK_DONE':
      // eslint-disable-next-line no-case-declarations
      const updatedTasks = state.posts.map((task) => {
        if (task.id === action.payload) {
          return { ...task, keyword: !task.keyword };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
}
