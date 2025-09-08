import React, { useEffect, useState } from 'react'
import { FaSort } from "react-icons/fa";


const About = ({ pageName }) => {
    const [userData, setUserData] = useState([]);
    const [userFiltered, setUserFiltered] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');

    const [time, setTime] = useState(0);
    const [color, setColor] = useState("green");


    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])


    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!res.ok) throw new Error("Failed to fetch users")
                const data = await res.json();
                setUserData(data);
                setUserFiltered(data);
                console.log("setUserData", data)
            }
            catch (error) {
                console.error("error data", error)
            }
        }
        getUsers();
    }, [])


    const colorHandle = (event) => {
        const colorName = event.target.value;
        setColor(colorName);
    }

    const handleTableFilter = (event)=>{
        const filterValue = event.target.value.toLowerCase().trim();
        setsearchTerm(filterValue);
        console.log('setsearchTerm  value:', filterValue);

        const filteredData = userData.filter(user =>
            user.username.toLowerCase().includes(filterValue) || user.email.toLowerCase().includes(filterValue) || user.name.toLowerCase().includes(filterValue)
        ) 
        setUserFiltered(filteredData);
    }


    return (
        <>
            <h1 className='fs-5 fw-semibold mb-3'>{pageName}</h1>
            <div className='d-flex align-items-center gap-3 mb-3 w-100 justify-content-between'>
                <div className='table-fillter'>
                    <input type="text" value={searchTerm}  placeholder="Search by name or email" className='form-control rounded-3' onChange={handleTableFilter} />
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <h3 style={{ color: `${color}` }}>{time}</h3>
                    <select defaultValue="green" onChange={colorHandle} className='border p-2 rounded-3'>
                        <option value="red">Red</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                        <option value="green">Green</option>
                    </select>
                </div>
            </div>

            <table className='table table-hover table-bordered table-striped-columns'>
                <thead className='table-secondary'>
                    <tr>
                        <th>No.</th>
                        <th>Name <FaSort /></th>
                        <th>Email <FaSort /></th>
                        <th>Website <FaSort /></th>
                        <th>Phone <FaSort /></th>
                        <th>Address <FaSort /></th>
                        <th>Company <FaSort /></th>
                    </tr>
                </thead>
                <tbody>
                    {userFiltered.length > 0 ?(
                        userData.map((user, index) => (
                        <tr key={user.id}>
                            <td>#{index}</td>
                            <td>{user.name} - {user.username}</td>
                            <td>{user.email}</td>
                            <td><a rel="noreferrer" href={`https://${user.website}`} target='_blank'>{user.website}</a></td>
                            <td>{user.phone}</td>
                            <td>{user.address.city} - <br /> {user.address.street}, {user.address.suite}, {user.address.zipcode} </td>
                            <td>{user.company.bs} - {user.company.catchPhrase}, {user.company.name} </td>
                        </tr>
                    ))
                    ):(
                        <tr>
                            <td colSpan={7} className='text-center text-danger'>Not found data...</td>
                        </tr>
                    )
                }
                    
                </tbody>
            </table>
        </>
    )
}

export default About
