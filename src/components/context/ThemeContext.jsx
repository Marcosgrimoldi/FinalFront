import React from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props){
    return (
        <ThemeContext.Provider color= {"dark"}>
        </ThemeContext.Provider>
    )
}  
export default ThemeProvider;