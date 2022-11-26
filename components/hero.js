function Hero() {
  return (
    <div
      className="hero flex flex-col items-start text-left justify-center min-h-screen px-[25px] max-w-7xl mx-auto"
      id="hero"
    >
      <h1 className="text-emerald-300 font-mono">Hi, my name is</h1>
      <h2 className="text-6xl font-bold mt-10">Rick Astley</h2>
      <h3 className="text-4xl text-slate-300 font-bold mt-8">
        I&apos;m never gonna give you up
      </h3>
      <p className="max-w-4xl mt-2 text-slate-300">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products.
      </p>
    </div>
  );
}

export default Hero;
