import DashboardTemplate from '@/components/dashboard/Dashboard.template';
import ProjectsSection from '@/components/dashboard/section/projects';
import React from 'react';

const Projects = () => {
  return (
    <DashboardTemplate>
      <ProjectsSection/>
    </DashboardTemplate>
  );
};

export default Projects;