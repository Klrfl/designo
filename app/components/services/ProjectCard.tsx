import type { ServiceProjects } from "$/tina/__generated__/types";

interface Props {
  project: ServiceProjects;
}

export default function ProjectCard({ project }: Props) {
  return (
    <li key={project.title}>
      <a
        href="#"
        className="bg-primary-100 group hover:bg-primary-500 grid cursor-pointer overflow-hidden rounded-lg transition-colors sm:max-lg:grid-cols-2"
      >
        {project.image && (
          <figure>
            <img
              src={project.image}
              className="w-full transition-[filter] group-hover:brightness-90"
              width="450"
              height="800"
              alt=""
            />
          </figure>
        )}

        <figcaption className="px-12 py-8 text-center sm:max-lg:place-self-center">
          <h3 className="heading-3 text-primary mb-4 font-medium uppercase group-hover:text-white">
            {project.title}
          </h3>
          <p className="text-base-700 group-hover:text-white">
            {project.description}
          </p>
        </figcaption>
      </a>
    </li>
  );
}
