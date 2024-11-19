import Link from './UI/Link';
import ThemeSwitcher from './ThemeSwitcher';
import DroptopMenu from './UI/DroptopMenu';

const Navbar = () => {

    return <div className='bg-lightPurple relative px-[2em] flex items-center sticky top-0 w-full h-[3rem] dark:bg-black'>
        <ul className='text-lightWhite flex flex-row items-center justify-center w-full gap-4'>
            <Link route="/">home</Link>
            <Link route="/train">train</Link>
            <DroptopMenu />
        </ul>
        <div className='absolute right-5'>
            <ThemeSwitcher />
        </div>
    </div>

}



export default Navbar;