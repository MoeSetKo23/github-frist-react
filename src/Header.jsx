//import logo from './assets/logo.webp'
import wallpaper1 from './assets/wallpaper1.png'
export default function Header(){


    return(
        <>
        <header>
        <div id="logoSpace">
            LOGO
        </div>
        <h2 id="gradient"> Creative FOODs</h2>
        <nav>
            <ul>
                <li>Main</li>
                <li>About Us</li>
                <li>Foods</li>
                <li>Services</li>
                
            </ul>
        </nav>
        <label>
            Search : <input type="search"></input>
        </label>
        
        </header>
        </>
    )
}