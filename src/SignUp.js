import React,{useState} from 'react'

export default function SignUp() {
  const[formData,setFormData]=useState({
    name:"",
    num:"",
    password:""
  })
  const handleInputChange=(event)=>{
    const {name,value}=event.target;
    setFormData((old)=>({...old,[name]:value}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(formData,"The Data")
  }
  return (
    <div>
      <img src="/amazonin.svg" className='iclg'></img>
        <div >
            <form className='amzform' onSubmit={handleSubmit}>
            <label className='headd'>Create Account</label>
                <label className='label'>Your Name</label>
                <input type='text' name='name' id="name" className='item' value={formData.name}  onChange={(event)=>handleInputChange(event)} required></input>
                <label className='label'>Mobile Number</label>
                <input type='tel' name='num' id="num" className='item' value={formData.num} onChange={(event)=>handleInputChange(event)} required></input>
                <label className='label'>Password</label>
                <input type='password' name='password' id="pass" className='item' value={formData.password} onChange={(event)=>handleInputChange(event)} required></input>
                <p className='labpar'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
                <input type='submit' name='btn' value="Verify mobile number" className='submitbtn'></input>
            </form>
        </div>
    </div>
  )
}
