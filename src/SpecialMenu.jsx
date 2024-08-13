import Beef from './assets/Beef.jpg'
import Chicken from './assets/Chicken.jpg'
import Duck from './assets/Duck.jpg'
import Burger from './assets/Burger.png'
export default function SpecialMenu() {

    
    return(
        <>
        <h1 style={{
            marginLeft: "30px",
            fontFamily: "cursive",
        }}>Today Special Menu</h1>
        <div id="specialMenu">
        
            <div id="specialMenu1">
                <img src={Beef} id="specialMenuImg" alt="beef" height="340px"/>
                <h3 style={{
                    textAlign: "center",
                    border: "1px solid black",
                    fontFamily: "cursive",
                }}>Beef Curry</h3>
            </div>
            <div id="specialMenu1">
                <img src={Chicken} id="specialMenuImg" alt="chicken" height="340px"/>
                <h3 style={{
                    textAlign: "center",
                    border: "1px solid black",
                    fontFamily: "cursive",
                }}>Chicken Curry</h3>
            </div>
            <div id="specialMenu1">
                <img src={Duck} id="specialMenuImg" alt="duck" height="340px"/>
                <h3 style={{
                    textAlign: "center",
                    border: "1px solid black",
                    fontFamily: "cursive",
                }}>Duck Curry</h3>
            </div>
            <div id="specialMenu1">
                <img src={Burger} id="specialMenuImg" alt="duck" height="340px"/>
                <h3 style={{
                    textAlign: "center",
                    border: "1px solid black",
                    fontFamily: "cursive",
                }}>Burger</h3>
            </div>
        </div>
        </>
    )
    
}