function ProjectCard(props) {
  return (
    <div className="bg-slate-800 p-4 rounded-sm">
      {props.project.is_featured ? (
        <p className="text-emerald-300 font-mono text-sm">Featured Project</p>
      ) : (
        <p></p>
      )}
      <p className="font-bold">{props.project.title}</p>
      <p className="mt-3">{props.project.desc}</p>
      <div className="mt-4">
        <a
          href={props.project.github}
          className="underline hover:text-emerald-300 transition duration-300"
        >
          Github
        </a>
        <a
          href={props.project.website}
          className="underline ml-4 hover:text-emerald-300 transition duration-300"
        >
          Website
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
