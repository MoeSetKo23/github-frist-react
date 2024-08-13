import ChocolateButter from './Desserts/PeanutButterChocolate.jpg'
import icecream from './Desserts/icecream.jpg'
import fruits from './Desserts/fruitsss.jpg'
export default function Dessert(){
    const style1={
        width: "200px",
        height: "250px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(225, 225, 225)",
        boxShadow: "3px 3px 5px gray",
        margin: "0 23px"}
const style2={
       marginTop: "10px",
        color: "gray",
        width: "100%",
        height: "40px",
        textAlign: "center",
        fontSize: "1.2rem",
        fontFamily: "cursive",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",}

    return(
        <>
        <h1 style={{
            textAlign: "center",
            fontFamily: "cursive",
            backgroundColor: "whitesmoke",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray"
        }}>Desserts</h1>
        <div id="dessertContainer">
            <div id="cakeContainer">
                <div style={style1}>  
                    <img src={ChocolateButter} alt="Peanut Butter Chocolate" width="200px" />
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
                <div style={style1}>
                    <img src={icecream} alt="Peanut Butter Chocolate" width="200px" />
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
                <div style={style1}>
                    <img src={fruits} alt="Peanut Butter Chocolate" width="200px" />
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
            </div>
            <div id="fruitsContainer">
                <div style={style1}>
                    <img src={fruits} alt="Peanut Butter Chocolate" width="200px" height="240px"/>
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
                <div style={style1}>
                    <img src={ChocolateButter} alt="Peanut Butter Chocolate" width="200px" height="240px"/>
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
                <div style={style1}>
                    <img src={icecream} alt="Peanut Butter Chocolate" width="200px" height="240px"/>
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
            </div>
            <div id="iceCreamContainer">
                <div style={style1}>
                    <img src={icecream} alt="Peanut Butter Chocolate" width="200px" height="240px"/>
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
                <div style={style1}>
                    <img src={fruits} alt="Peanut Butter Chocolate" width="200px" height="240px"/>
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
                <div style={style1}>
                    <img src={ChocolateButter} alt="Peanut Butter Chocolate" width="200px" height="240px"/>
                    <h3 style={style2}>Peanut Butter Chocolate</h3>
                </div>
            </div>

        </div>
        
        </>
    )
}