'use client'

import React, {useContext} from "react";
import {ThemeContext} from "@/app/src/context/ThemeContext";

const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme}>{children}</div>
    )
};

export default ThemeProvider;