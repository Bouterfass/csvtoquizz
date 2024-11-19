import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "./Link";

const DroptopMenu = () => {
  return (
    <div>
      <Menu __demoMode>
        <MenuButton>
          <span className="font-bold text-lightWhite hover:underline hover:cursor-pointer dark:text-yellow">games</span>
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom start"
          className="w-52 mt-4 origin-top-right rounded-xl border border-white/5 bg-blackL p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <Link route="/shiritori">shiroti</Link>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <Link route="/kanji-ketsugou">kanji ketsugou</Link>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <Link route="/tango-sagashi">tango sagashi</Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default DroptopMenu;
