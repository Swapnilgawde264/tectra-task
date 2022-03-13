import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewData = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/user").then((res)=>{
        console.log(res.data);     
        setdata(res.data)}
             )

    }, [])
    
  return (
    <div>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">DOB</th>
      <th scope="col">EMail</th>
      <th scope="col">Mobile</th>
      <th scope="col">Designation</th>
      <th scope="col">Overtime</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item,index)=>{
            return (
                        <tr>
                        <th scope="row">{index}</th>

                        <td>{item.name}</td>
                        <td>{item.dob}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.designation}</td>
                        <td>{item.overtime}</td>
                        </tr>
                    )
        })
    }
  </tbody>
</table>

    </div>
  )
}

export default ViewData