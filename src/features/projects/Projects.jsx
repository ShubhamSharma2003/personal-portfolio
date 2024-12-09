import ProjectCard from "./ProjectCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { project } from "./project";
import HyperText from "../../components/ui/hyper-text";
function projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shubham Sharma | Projects</title>
      </Helmet>
      <div className=" bg-mainBg p-8">
      <HyperText
      className="pb-5 text-3xl text-white"
      text="Stuff I've Built So Far"
    />
        <div className=" grid gap-y-5 md:grid-cols-2 md:gap-x-5 xl:grid-cols-4">
          {project.map((p) => {
            return (
              <ProjectCard
                key={p.title}
                title={p.title}
                desc={p.description}
                img={p.image}
                srcCode={p.sourceCode}
                demo={p.demo}
                tags={p.tags}
              />
            );
          }
          )}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default projects;
