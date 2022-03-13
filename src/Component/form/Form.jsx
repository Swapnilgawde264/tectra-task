import axios from 'axios';
import React, { useState } from 'react'
import { inputData, } from '../assets/constant';
import "./form.css";
import { useHistory } from 'react-router-dom'

const FormInput = ({ label, type, selectOption, value,setvalue}) => {

    // console.log(input);
    return (
        <div>
            <div class="form-group">
                <label for="exampleInputEmail1">{label}</label>
              
                <br />
                {
                    label == "Designation" ?
                        <select class="custom-select">
                            {selectOption.map((item, index) =>
                                <option key={index}>{item}</option>
                            )}

                        </select>
                        : 
                        <div>
                        <input type={type} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={"Enter " + label} onChange={(e)=>{
                            setvalue(e.target.value,label)
                        }} />
                        </div>
                }

            </div>
        </div>
    )
}

const Form = () => {
    let history = useHistory();
    const [input, setinput] = useState({
        name:'ajay',
        dob:'',
        email:'',
        mobile:'',
        designation:'',
        overtime:false
    })
    const key="name"
    const changeHandler=(val,label)=>{
            setinput({...input,[label]:val})
    }

   const submitHandler=(e)=>{
                e.preventDefault()
                axios.post("http://localhost:3000/user",input).then((res)=>console.log(res))

   }
   const fuctionForVIewData=()=>{
    history.push("/viewdata")
   }
    return (
        <div>
            <form className='w-50 mx-auto mt-5 bg-dark p-5 text-light' onSubmit={submitHandler}>
            {inputData.map((item, index) => {
                    return (
                        <FormInput key={index} label={item.label} type={item.type} selectOption={item.selectOption} value={item.label} setvalue={changeHandler}  />
                    )
                })
                }
                <button type="submit" class="btn btn-primary" >Submit</button>
                <button type="submit" class="btn btn-secondary" onClick={fuctionForVIewData} >View Data</button>
            </form>
        </div>
    )
}
//   <div class="form-group">

//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>

export default Form