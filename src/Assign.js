import React,{useState} from 'react'

export default function Assign() {
    const[formData,setFormData]=useState({
       val:"Hello"
      })
      const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setFormData((old)=>({...old,[name]:value}))
      }
      const handleReset=()=>{
        setFormData(()=>({val:"Hello"}))
        // console.log(formData,"DataReset")
      }
  return (
    <div className='form'>
        <h4>State Handling - {formData.val}</h4>
    <form className="formX">
        <input type='text' name="val" className='item' value={formData.val} onChange={handleInputChange}/>
        <input type="button" value="Reset To Default" className='submitbtn' onClick={handleReset} />
    </form>
    </div>
  )
}
