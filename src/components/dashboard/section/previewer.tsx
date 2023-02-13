import Button from "@/components/commons/button";

const postContent = `<div>Content Section B</div>`;

const PreviewerSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* tailwindcss style center */}
      <div className="flex flex-col justify-center items-center">
        <h1>Title</h1>
        <div>
          Inputs Sections: selected project, selected post
          <Button>SeleccionarA</Button>
        </div>
      </div>
      <hr className="w-64 h-px my-4 bg-gray-400 border-0 dark:bg-gray-700"/>   
      <div>
        <div dangerouslySetInnerHTML={{ __html: postContent}}/>
      </div>
    </div>
  );
}

export default PreviewerSection;