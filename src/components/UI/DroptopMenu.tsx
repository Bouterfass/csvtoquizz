import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "./Link";

const DroptopMenu = () => {
  return (
    <div>
      <Menu>
        <MenuButton>
          <span className="font-bold text-lightWhite hover:underline hover:cursor-pointer focus:outline-none">games</span>
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom start"
          className="w-52 mt-4 origin-top-right 
          rounded-xl border bg-lightGrayL border-lightPurple dark:bg-blackL dark:border-lightWhite
          list-none
          p-1 text-sm/6 text-white transition duration-100 ease-out  focus:outline-none"
        >
          <MenuItem>
            <Link route="/shiritori"><span className="pl-2 text-lightPurple dark:text-lightWhite hover:underline">shiritori</span></Link>
          </MenuItem>
          <div className="my-1 h-px bg-gray-100" />
          <MenuItem>
            <Link route="/kanji-ketsugou"><span className="pl-2 text-lightPurple dark:text-lightWhite hover:underline">kanji ketsugou</span></Link>
          </MenuItem>
          <div className="my-1 h-px bg-gray-100" />
          <MenuItem>
            <Link route="/tango-sagashi"><span className="pl-2 text-lightPurple dark:text-lightWhite hover:underline">tango sagashi</span></Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default DroptopMenu;
