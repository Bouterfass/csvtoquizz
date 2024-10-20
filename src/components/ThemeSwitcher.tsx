import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import useDarkSide from '../hooks/useDarkSide';

const ThemeSwitcher = () => {

    const [enabled, setEnabled] = useState(false);
    const [theme,setTheme] = useDarkSide();

    useEffect(() => {
      // Si le thème actuel est "dark", activer le switch
      setEnabled(theme === 'dark');
    }, [theme]);  // Exécuter à chaque fois que le thème change
  
    const toggleTheme = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);  // Changer le thème
    };

    return (
      <Switch
        checked={enabled}
        onChange={toggleTheme}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>
    )
}





export default ThemeSwitcher;