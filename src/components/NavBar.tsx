import Link from './UI/Link';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {

    return <div className='relative px-[2em] flex items-center sticky top-0 w-full h-[3rem] bg-blue dark:bg-black'>
        <ul className='flex flex-row items-center justify-center w-full gap-4'>
            <Link route="/">home</Link>
            <Link route="/tests">train</Link>
        </ul>
        <div className='absolute right-5'>
            <ThemeSwitcher />
        </div>
    </div>

}



export default Navbar;