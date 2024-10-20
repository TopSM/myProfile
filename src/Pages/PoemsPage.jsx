import React,  { useState } from 'react'
import MyPoems from '../Components/MyPoems'
function getTodaysDay() {

    let today = new Date();
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todaysDay = daysOfTheWeek[today.getDay()];

    return todaysDay;
}
const basicColors = (colors) => {
    return {
      backgroundColor: colors ? "white" : "#282c34",
      color: colors ? "black" : "aliceblue"
    }
  }

function PoemsPage() {
    const [color] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true)

    return (
        <div  style={basicColors(color)} className='poem-pad poem-pad2' >
            <MyPoems todaysDay={getTodaysDay()} />            
            <h3 className='poem-author'>- Ostavo R. Palacios</h3>
        </div>
    )
}

export default PoemsPage