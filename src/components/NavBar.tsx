import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {

return <div className='px-[2em] flex items-center sticky top-0 w-full h-[3rem] bg-blue dark:bg-black'>
    <ThemeSwitcher />
</div>

}



export default Navbar;