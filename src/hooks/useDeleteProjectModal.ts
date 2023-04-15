// useDeleteProjectModal.ts
import { useState } from 'react';

import type { GptProject } from '@/models/gpt-project.model';
import { ProjectApi } from '@/services/project.service';

export const useDeleteProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<GptProject | null>(
    null
  );

  const openDeleteModal = (item: GptProject) => {
    setProjectToDelete(item);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
  };

  const deleteProject = async () => {
    console.log('delete project: ', projectToDelete);
    if (!projectToDelete) return;

    await ProjectApi.delete(projectToDelete.id);
    closeDeleteModal();
  };

  return {
    isModalOpen,
    projectToDelete,
    openDeleteModal,
    closeDeleteModal,
    deleteProject,
  };
};
