import { useState } from "react"
import OrderlistComponent from "./OrderlistComponent.jsx"

export default function OrderLists(){
    const tranditionalFoods = [
                {name: "Let Phat Thoke", price: 3000,},
                {name: " A Kyaw", price: 500},
                {name: "Kauk Nyin Paung", price: 800},
                {name: "Mont", price: 1200},
                {name: "Mont 1", price: 1800},
                {name: "Mont hin Khar", price: 2200},
                {name: "Ohn Nood Khauk Swal", price: 2500},
                {name: "Mont Lin Ma Yar", price: 300}]
    const [addedTraditionalFoods, setAddedTraditionalFoods] =useState([]);

    function addTraditionalFood(){
        const addedList ={
            name: tranditionalFoods.name,
            price: tranditionalFoods.price,
        }
        setAddedTraditionalFoods(f => [...f, addedList]);
    }






    return(<>
        <div id="orderlistContainer">
            <div id="traditionalFoodHeader">
            <h2 style={{
                textAlign: "center",
                fontFamily: "cursive",
                border: "1px solid black",
            }}>Myanmar Traditional Foods</h2>
            </div>
            <OrderlistComponent />    
        </div>
        <div id="orderContainer">
            <ol>
            {tranditionalFoods.map((food, index)=>(

                <li key={index} id="traditionalFoodList" value={food.name}>
                    {food.name} -- {food.price} MMK
                    <span>
                    <button id="increaseTraditionalFood"
                    onClick={addTraditionalFood}
                    >+</button>
                    <button id="decreaseTraditionalFood"
                    >-</button>
                    </span>    
                </li>
                ))}     
            </ol>
        </div>
        <div>
         <h2 style={{
            textAlign: "center",
            fontFamily: "cursive",
            height: "100px",
         }}>Your Order</h2>
         <ol>
                {addedTraditionalFoods}
         </ol>
        </div>
    </>)
}