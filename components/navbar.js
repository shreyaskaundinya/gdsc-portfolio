import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((p) => !p);
    };

    return (
        <>
            <nav className='md:hidden flex flex-row w-full justify-between items-center px-8 py-6 bg-black'>
                <div className='font-bold text-2xl w-[50px] h-[50px] grid place-items-center border border-emerald-300 rounded-full'>
                    R
                </div>
                <button onClick={handleToggle}>O</button>
                <div
                    className={`${
                        open ? 'block' : 'hidden'
                    } h-screen fixed right-0 top-0 bg-slate-800 w-3/4 z-10`}>
                    <div className='grid place-items-center relative w-full h-full'>
                        <button
                            className='absolute top-8 right-8'
                            onClick={handleToggle}>
                            X
                        </button>
                        <ul className='flex flex-col gap-8'>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#experience'>Experience</a>
                            </li>
                            <li>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li>
                                <a href='#contact'>Contact</a>
                            </li>
                            <li>
                                <a href='#resume'>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className='hidden md:flex flex-row w-full justify-between items-center px-12 py-4 sticky top-0 bg-black z-[500]'>
                <div className='font-bold text-2xl w-[50px] h-[50px] grid place-items-center border border-emerald-300 rounded-full'>
                    R
                </div>
                <ul className='flex flex-row gap-4'>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                    <li>
                        <a href='#resume'>Resume</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
