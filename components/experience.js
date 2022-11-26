import { useState } from 'react';

import { experiences } from '../data/experiences';

function Experiences() {
    const [selected, setSelected] = useState(0);

    // on click event handler
    const handleSelected = (idx) => {
        setSelected(() => idx);
    };

    return (
        <div
            className='py-20 px-8 max-w-7xl mx-auto flex flex-col justify-center'
            id='experience'>
            <h2 className='mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5'>
                Experiences
            </h2>
            <div className='flex md:flex-row flex-col gap-10'>
                <div className='flex md:flex-col flex-row gap-2 overflow-scroll'>
                    {experiences.map((e, idx) => {
                        return (
                            <button
                                key={e.title + idx}
                                onClick={() => handleSelected(idx)}
                                className={`p-2 ${
                                    selected === idx
                                        ? 'border-2 md:border-l-0 md:border-b-0 md:border-t-0 border-emerald-300 text-emerald-300'
                                        : ''
                                } `}>
                                {e.company}
                            </button>
                        );
                    })}
                </div>

                <div className='max-w-xl min-h-[20vh] md:min-h-[40vh]'>
                    <p className='text-step-2'>
                        {experiences[selected].title}{' '}
                        <span className='font-bold'>
                            @ {experiences[selected].company}
                        </span>
                    </p>
                    <p>{experiences[selected].date}</p>
                    <ul className='list-disc ml-4 py-4'>
                        {experiences[selected].description.map((desc, idx) => {
                            return (
                                <li key={idx} className='list-item'>
                                    {desc}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
