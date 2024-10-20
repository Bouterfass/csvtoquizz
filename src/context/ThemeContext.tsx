import React , { createContext, useState, useContext, useEffect, ReactNode} from 'react';

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<string>(localStorage.theme || 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context;
}