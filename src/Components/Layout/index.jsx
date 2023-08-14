// index.js o App.js
import './style.css';


function Layout({children}){
    return(
        <div className="layout">
            {children}
        </div>
    );

}

export {Layout}