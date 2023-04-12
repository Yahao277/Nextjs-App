import { Button } from '@/components/commons/button';

const postContent = `<div>Content Section B</div>`;

const PreviewerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* tailwindcss style center */}
      <div className="flex flex-col items-center justify-center">
        <h1>Title</h1>
        <div>
          Inputs Sections: selected project, selected post
          <Button>SeleccionarA</Button>
        </div>
      </div>
      <hr className="my-4 h-px w-64 border-0 bg-gray-400 dark:bg-gray-700" />
      <div>
        <div dangerouslySetInnerHTML={{ __html: postContent }} />
      </div>
    </div>
  );
};

export default PreviewerSection;
