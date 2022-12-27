import { createContext, useEffect, useState } from 'react'
import { theme } from '../Data/Data';


const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

  
  const [themeName, setThemeName] = useState('light');
  const [updateState, setUpdateState] = useState(true)

  useEffect(() => {
    var root =  document.documentElement; 
    const data = localStorage.getItem('themeName');
    setThemeName(data)
    if(themeName === 'light'){
      for(let property in theme.light) {		
        let key = property;
        let value = theme.light[property];
        root.style.setProperty(key, value)
      }
    } else{
        for(let property in theme.dark) {		
          let key = property;
          let value = theme.dark[property];
          root.style.setProperty(key, value)
        }
    }

  }, [updateState, themeName])

  

  // console.log(theme.dark.key)
  

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
