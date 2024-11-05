import React, { useState } from 'react';


function Counter() {
    const [formData, setFormData] = useState({
        counter: 4,
        disable: false
    });
   
    const increment = () => {
        setFormData((prevData) => ({
            ...prevData,
            counter: prevData.counter + 1,
            disable: false  
        }));
    };


    const decrement = () => {
        setFormData((prevData) => ({
            ...prevData, counter: prevData.counter > 0 ? prevData.counter - 1 : 0,
            disable: prevData.counter <= 1  
        }));
    };


    const reset = () => {
        setFormData({
            counter: 4,
            disable: false
        });
    };


    return (
        <div>
            <h1>Counter</h1>
            <h2>Counter timer: {formData.counter}</h2>
            <input type="button" value="Increment" onClick={increment} className='submitbtn'/>
            <input type="button" value="Decrement" disabled={formData.disable} onClick={decrement} className='submitbtn'/>
            <input type="button" value="Reset" onClick={reset} className='submitbtn'/>
        </div>
    );
}


export default Counter;




