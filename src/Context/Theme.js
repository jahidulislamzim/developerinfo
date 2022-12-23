import { createContext, useEffect, useState } from 'react'


const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');
  const [updateState, setUpdateState] = useState(true)

  useEffect(() => {

    const data = localStorage.getItem('themeName');
    setThemeName(data)
    if(themeName === 'light'){
        window.document.body.classList.add(themeName);
        window.document.body.classList.remove('dark');
    } else{
        window.document.body.classList.add(themeName);
        window.document.body.classList.remove('light');
    }

  }, [updateState, themeName])

  

  const toggleTheme = (e) => {
    localStorage.setItem('themeName', e)
    setThemeName(e)
    setUpdateState(!updateState)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}


export { ThemeProvider, ThemeContext }
