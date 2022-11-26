function About() {
    const skills = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Eleventy',
        'Node.js',
        'WordPress',
    ];
    return (
        <div
            className='about px-7 py-20 flex flex-col items-center justify-center max-w-7xl mx-auto'
            id='about'>
            <h2 className='about-heading flex items-center w-full mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5'>
                About Me
            </h2>
        </div>
    );
}

export default About;
