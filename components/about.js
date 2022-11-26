function About() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Eleventy",
    "Node.js",
    "WordPress",
    "Golang",
    "Rust",
  ];

  return (
    <div
      className="about px-7 py-20 flex flex-col items-center justify-center max-w-7xl mx-auto"
      id="about"
    >
      <h2 className="about-heading flex items-center w-full mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5">
        About Me
      </h2>

      {/* starts here */}
      {/*  */}
      {/* sm : 640px */}
      <div className="content__container flex gap-12 flex-col sm:flex-row">
        <div className="content__left">
          <div className="content__aboutme">
            <p className="">
              Ut enim nisi temporibus qui ut ab qui laboriosam. Eveniet dolore
              et laborum iure voluptatem perferendis. Accusamus eveniet fugit
              neque. Et deserunt aut necessitatibus praesentium sapiente
              eveniet.
            </p>
            <p className="mt-4">
              Ut enim nisi temporibus qui ut ab qui laboriosam. Eveniet dolore
              et laborum iure voluptatem{" "}
              <span className="text-emerald-300">perferendis</span>. Accusamus
              eveniet fugit neque. Et deserunt aut necessitatibus praesentium
              sapiente eveniet.
            </p>
          </div>

          <p className="font-bold mt-8">
            Here are some of the technologies I'm familiar with :{" "}
          </p>
          <div className="content__technologies text-slate-300 grid grid-cols-2 mt-4">
            {skills.map((skill) => {
              return <p key={skill}>{skill}</p>;
            })}
          </div>
        </div>

        <div className="content__right">
          <img src="/rick.gif" className="w-full sm:w-3/4" />
        </div>
      </div>
      {/* ends here */}
    </div>
  );
}

export default About;
