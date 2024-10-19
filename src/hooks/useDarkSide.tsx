import { useEffect, useState } from "react";

 const useDarkSide = () => {

    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? 'light' : 'dark';

    useEffect(() => {
        console.log("colortheme", colorTheme);
        console.log("theme", theme);
        
        
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme])

    return [theme, setTheme];
}


export default useDarkSide;