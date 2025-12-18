import navbar from './navbar.js';
import hero from './hero.js';
import sidebar from './sidebar.js';
import mobileMenu from './mobileMenu.js';


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    React.createElement('div', null,[
        mobileMenu(),
        navbar(), 
        sidebar(),
        hero()
    ])
);
