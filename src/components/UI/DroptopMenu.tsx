import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "./Link";

const DroptopMenu = () => {
  return (
    <div>
      <Menu __demoMode>
        <MenuButton>
          <span className="font-bold text-lightWhite hover:underline hover:cursor-pointer">games</span>
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom start"
          className="w-52 mt-4 origin-top-right 
          rounded-xl border border-white/5 bg-blackL 
          list-none
          p-1 text-sm/6 text-white transition duration-100 ease-out"
        >
          <MenuItem>
            <Link route="/shiritori"><span className="pl-2">shiritori</span></Link>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <Link route="/kanji-ketsugou"><span className="pl-2">kanji ketsugou</span></Link>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <Link route="/tango-sagashi"><span className="pl-2">tango sagashi</span></Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default DroptopMenu;
