function Footer() {
    return (
        // Responsive footer
        <footer className='footer bottom-0'>
            <div className='flex flex-col items-center justify-center w-full h-[100px] px-[25px] text-center text-slate-400'>
                <p className='text-sm'>
                    © {new Date().getFullYear()} Rick Astley. All rights
                    reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
