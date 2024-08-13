import letphattoke from './TraditionalFoods/letphattoke.jpg'
import akyaw from './TraditionalFoods/akyaw.jpg'
import kauknyinpaung from './TraditionalFoods/kauknyinpaung.jpg'
import mont from './TraditionalFoods/mont.jpg'
import mont1 from './TraditionalFoods/mont1.jpg'
import monthinkhar from './TraditionalFoods/monthinkhar2.jpg'
import montlinmayar from './TraditionalFoods/montlinmayar.jpg'
import ohnnokaukswal from './TraditionalFoods/ohnno.jpg'
import { useState } from 'react'


export default function OrderlistComponent(){
    const style1={
            width: "300px",
            height: "300px",
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(225, 225, 225)",
            boxShadow: "3px 3px 5px gray",}
    const style2={
           marginTop: "10px",
            backgroundColor: "rgb(193, 192, 192)",
            width: "100%",
            height: "40px",
            textAlign: "center",
            fontSize: "1.2rem",
            fontFamily: "cursive",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",}
   
    
    
    return(<>
        <div id="tranditionalFoodsContainer">
        <div style={style1}>
            <img src={letphattoke} alt="letphattoke" width="230px" height="230px"/>

            <div style={style2}>
                Let Phat Thoke
            </div>
            
        </div>
        <div style={style1}>
            <img src={akyaw} alt="A Kyaw" width="260px" height="230px"/>

            <div style={style2}>
                A Kyaw 
            </div>
        </div>
        <div style={style1}>
            <img src={kauknyinpaung} alt="kauknyinpaung" width="230px" height="230px"/>

            <div style={style2}>
                Kauk Nyin Paung 
            </div>
        </div>
        <div style={style1}>
            <img src={mont} alt="Mont" width="250px" height="230px"/>

            <div style={style2}> 
                Mont 
            </div>
        </div>
        <div style={style1}>
            <img src={mont1} alt="Mont1" width="250px" height="230px"/>

            <div style={style2}> 
                Mont 1 
            </div>
        </div>
        <div style={style1}>
            <img src={monthinkhar} alt="monthinkhar" width="270px" height="230px"/>

            <div style={style2}>
                Mont Hin khar 
            </div>
        </div>
        
        <div style={style1}>
            <img src={montlinmayar} alt="montlinmayar" width="250px" height="230px"/>

            <div style={style2}> 
                Mont Lin Ma Yar 
            </div>
        </div>
        <div style={style1}>
            <img src={ohnnokaukswal} alt="ohnnootkhaukswal" width="220px" height="230px"/>

            <div style={style2}> 
                Ohn Noot Khauk Swal 
            </div>
        </div>
        </div>
        <hr />
    </>)
}