import { useEffect, useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{

    darkMode?
    document.body.classList.add('dark')
    :
    document.body.classList.add('light');

    darkMode?
    document.body.classList.remove('light')
    :
    document.body.classList.remove('dark');

    // for(var key in style){
    //     window.document.body.style[key as any] = style[key];
    // }
    // return () => {
    //     window.document.body.style[key as any] = '';
    // }
}, [darkMode])




  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};