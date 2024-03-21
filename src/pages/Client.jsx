import React, { useEffect, useState } from 'react'

export default function Client() {
    const [user,setUser] = useState([])
    const handleClient = async() =>{
        try {
            fetch("http://localhost:8000/api/v1/client")
            .then(response =>{
                if(!response.ok){
                    throw new Error("some issue")
                  }
                  return response.json();
            }).then((data )=>{
                console.log("user",data.data)
                setUser(data.data)
            }).catch(error =>{
                console.log("erro =>",error)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        handleClient()
    },[])
    return (
        <>
            <div className="bookings">
                <div className="booking__wrapper">
                    <h2 className="booking__title">User</h2>
                    <table class="table text-white">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope='col'>Gender</th>
                                <th scope='col'>Country</th>
                                <th scope='col'>Delete</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {user.map((item,index)=>(

                                <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.fname}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNo}</td>
                                <td>{item.gender}</td>
                                <td>{item.country}</td>
                                <td className='' style={{cursor:"pointer"}}><i class="ri-delete-bin-5-fill"></i></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                   
                </div>
            </div>
        </>
    )
}
