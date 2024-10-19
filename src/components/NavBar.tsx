import React from 'react';
import useDarkSide from '../hooks/useDarkSide';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {

return <div className='sticky top-0 w-full h-[3rem] bg-blue dark:bg-black'>
    <ThemeSwitcher />

</div>

}



export default Navbar;