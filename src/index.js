import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {ThemeSwitcherProvider} from "react-css-theme-switcher";
import './static/css/index.css';
import './config/i18next-config';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const themes = {
    dark: `${process.env.REACT_APP_FRONTEND_URL}/dark-theme.css`,
    light: `${process.env.REACT_APP_FRONTEND_URL}/light-theme.css`,
};
const defaultTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

root.render(
    <React.StrictMode>
        <ThemeSwitcherProvider
            //insertionPoint="styles-insertion-point"
            themeMap={themes} defaultTheme={defaultTheme}>
            <App/>
        </ThemeSwitcherProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
