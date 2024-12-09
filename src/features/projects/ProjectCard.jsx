import Tag from "./Tag";
import { BorderBeam } from "../../components/ui/border-beam";

/* eslint-disable react/prop-types */
function ProjectCard({ img, title, desc, tags, srcCode, demo }) {
  return (
    <div className="relative flex max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg text-textColor hover:shadow-lg 
    animate-in fade-in zoom-in delay-0 duration-1000">
      {/* BorderBeam */}
      <BorderBeam size={250} duration={6} delay={9} />
      
      <img src={img} className="h-[180px] rounded-b-xl rounded-t-lg" alt="" />

      <div className="flex flex-col gap-y-2 p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-base font-medium">{desc}</p>
        <div className="">
          {tags.map((tag) => {
            return <Tag key={tag} tagName={tag} />;
          })}
        </div>
        <div className="space-x-2">
          <a
            href={srcCode}
            className="px-1 py-1 text-lg font-semibold decoration-accentColor 
               border-2 border-accentColor rounded hover:bg-yellow-500 hover:text-white hover:no-underline hover:border-opacity-50"
            rel="noreferrer"
          >
            Source Code
          </a>
          <a
            href={demo}
            className="px-1 py-1 text-lg font-semibold decoration-accentColor 
            border-2 border-accentColor rounded hover:bg-green-500 hover:text-white hover:no-underline hover:border-opacity-50"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
