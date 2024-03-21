import React, { useEffect, useState } from 'react'
import FetchApi from '../const/FetchApi';
import AppConfig from '../const/AppConfig';

export default function SubAdmin() {
    const [user,setUser] = useState([])
    const handelerDriveApi = async () =>{
        try {
            const res = await FetchApi("driver","",{
                method:"GET"
            })
            console.log("first",res.data);
            if(res.status === 200){
                setUser(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        handelerDriveApi()
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
                                <th scope='col'>Image</th>
                                <th scope="col">Fname</th>
                                <th scope="col">Lname</th>
                                <th scope="col">Phone</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>City</th>
                                <th scope='col'>Delete</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {user.map((item,index)=>(

                                <tr>
                                <th scope="row">{index+1}</th>
                                <td><img src={AppConfig.BASE_URL + "ProfilePic/"+item.image} style={{width:"50px" ,borderRadius:"2rem"}}/></td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
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


