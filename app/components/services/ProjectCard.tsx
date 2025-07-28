import type { ServiceProjects } from "$/tina/__generated__/types";

interface Props {
  project: ServiceProjects;
}

export default function ProjectCard({ project }: Props) {
  return (
    <li
      key={project.title}
      className="bg-primary-100 rounded-lg grid sm:max-lg:grid-cols-2 overflow-hidden"
    >
      {project.image && (
        <figure>
          <img
            src={project.image}
            className="w-full"
            width="450"
            height="800"
            alt=""
          />
        </figure>
      )}

      <figcaption className="text-center py-8 px-12 sm:max-lg:place-self-center">
        <h3 className="heading-3 uppercase text-primary mb-4">
          {project.title}
        </h3>
        <p className="text-base-700">{project.description}</p>
      </figcaption>
    </li>
  );
}
