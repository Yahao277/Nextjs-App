import type { GptPost, GptProject } from '@/models/gpt-project.model';
import type { ProjectData } from '@/models/project.model';

const host = 'http://localhost:8080';

export const ProjectApi = {
  getProjectList: (): Promise<GptProject[]> => {
    const endpoint = `${host}/gpt-project`;
    return fetch(endpoint)
      .then((res) => res.json())
      .then(
        (data) =>
          data.map((project: any) => ({
            ...project,
            // eslint-disable-next-line no-underscore-dangle
            id: project._id,
          })) as GptProject[]
      )
      .catch(() => []);
  },
  getProject: (id: string): Promise<ProjectData> => {
    const endpoint = `${host}/gpt-project/${id}`;
    return fetch(endpoint)
      .then((res) => res.json())
      .catch((error) => console.error(error));
  },
  createProject: (project: GptProject) => {
    const endpoint = `${host}/gpt-project`;
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  },
  getPosts(projectId: string): Promise<GptPost[]> {
    const endpoint = `${host}/gpt-project/${projectId}/post?summary=true`;
    return fetch(endpoint)
      .then((res) => res.json())
      .then(
        (data) =>
          data.map((post: any) => ({
            ...post,
            // eslint-disable-next-line no-underscore-dangle
            id: post._id,
            idx: post.id,
          })) as GptPost[]
      );
  },
  getPost(projectId: string, postId: string): Promise<GptPost> {
    const endpoint = `${host}/gpt-project/${projectId}/post/${postId}`;
    return fetch(endpoint)
      .then((res) => res.json())
      .then(
        (data) =>
          ({
            ...data,
            // eslint-disable-next-line no-underscore-dangle
            id: data._id,
            idx: data.id,
            content: data.generatedContent,
          } as GptPost)
      );
  },
  getPostByIdx(projectId: string, idx: number): Promise<GptPost> {
    const endpoint = `${host}/gpt-project/${projectId}/post-idx/${idx}`;
    return fetch(endpoint)
      .then((res) => res.json())
      .then(
        (data) =>
          ({
            ...data,
            // eslint-disable-next-line no-underscore-dangle
            id: data._id,
            idx: data.id,
            content: data.generatedContent,
          } as GptPost)
      );
  },
  updateProject: (project: ProjectData): Promise<void> => {
    const endpoint = `${host}/gpt-project/${project.id}`;
    return fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  },
  delete: (projectId: string): Promise<void> => {
    const endpoint = `${host}/gpt-project/${projectId}`;
    return fetch(endpoint, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  },
  startJob: (projectId: string): Promise<void> => {
    const endpoint = `${host}/gpt-project/${projectId}/job/resume`;
    return fetch(endpoint, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  },
  stopJob: (projectId: string): Promise<void> => {
    const endpoint = `${host}/gpt-project/${projectId}/job/pause`;
    return fetch(endpoint, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  },
};
