import React from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {

  const { theme, toggleTheme } = useTheme();

  const enabled = theme === 'dark';
  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-white border-2 border-solid border-purpleDk transition data-[checked]:bg-blue-600 dark:border-yellow dark:bg-black"
    >
      <span className="size-4 translate-x-1 rounded-full bg-purpleDk transition group-data-[checked]:translate-x-5 dark:bg-yellow" />
    </Switch>
  )
}





export default ThemeSwitcher;