import Link from './UI/Link';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {

return <div className='px-[2em] flex items-center sticky top-0 w-full h-[3rem] bg-blue dark:bg-black'>
    <ul className=''>
        <Link route="/">home</Link>
        <Link route="/tests">train</Link>
    </ul>
    <ThemeSwitcher />
</div>

}



export default Navbar;