import Beef from './assets/beef.jpg'
import Chicken from './assets/Chicken.jpg'
import Duck from './assets/Duck.jpg'
import Pizza from './Desserts/pizza.jpg'

export default function ChooseItem(){
    
    const buttonStyle1={
            fontSize: "1.2rem",
            backgroundColor: "lightblue",
            padding: "5px 15px",
            borderRadius: "7px",
            border: "none",
            color: "white",
            cursor: "pointer",
            marginLeft: "20px",
            }
    const buttonStyle2={
        fontSize: "1.2rem",
        backgroundColor: "red",
        padding: "5px 18px",
        borderRadius: "7px",
        border: "none",
        color: "white",
        cursor: "pointer",
        marginLeft: "20px",
    }
    const foodContainerStyle={
        width: "420px",
        height: "550px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: "10"}



    
    const typeofPizza = [
        {name: "French Bread", price: 120},
        {name: "Baked Ziti", price: 200},
        {name: "Grandma Slice", price: 220},
        {name: "New York Slice", price: 133},
    ]
 //   const [pizzaPrice, setPizzaPrice] = useState(1);
    
    const displayPizza = () =>{ 
        const targetPizza = document.getElementById("typeOfPizza");
        targetPizza.style.display = "block";
        targetPizza.style. transform = "translate(0px)";
        }
    const hidePizza = () =>{
        const targetPizza = document.getElementById("typeOfPizza");
        targetPizza.style.display = "none";
    }


    

    return(
        <>
        <div id="curryContainer"><img src={Beef} alt="Beef Curry" width="100%"/><h2 className='chooseItemCurry'>CHICKEN CURRY</h2></div>
        <div id="curryContainer"><img src={Chicken} alt="Beef Curry" width="100%"/><h2 className='chooseItemCurry'>FISH CURRY</h2></div>
        <div id="curryContainer"><img src={Duck} alt="Beef Curry" width="100%"/><h2 className='chooseItemCurry'>BEEF CURRY</h2></div>
        
        <div id="pizzaContainer">
       <div style={foodContainerStyle}>
            <img src={Pizza} alt="pizza" width="400px"/>
                <p style={{
                        textAlign: "center",
                        }}>
                            Pizza is a traditional Italian dish consisting of a 
                            wheat-based dough topped with tomato,cheese, and other ingredients,
                </p>
                <p>Do you want to get it?</p>
            <div>
                <button onClick={()=>displayPizza()}>Yes</button>
                <button onClick={hidePizza}>No</button>
            </div>
                  
        </div>
        <div id="typeOfPizza">
            <ul>
                <li> French Break  120$ <button style={buttonStyle1}>+</button> 
    
                <button style={buttonStyle2}>-</button>
                </li> 
                <li>Baked Ziti 200$ 
                    <button style={buttonStyle1}>+</button> 
                    <button style={buttonStyle2}>-</button>
                </li> 
                <li>Grandmaa Slice 220$  
                    <button style={buttonStyle1}>+</button> 
                    <button style={buttonStyle2}>-</button>
                </li>
                <li>New York 133$ 
                    <button style={buttonStyle1}>+</button> 
                    <button style={buttonStyle2}>-</button>
                </li>
            </ul> 
        </div>
        
        </div>
        </>
    )
}