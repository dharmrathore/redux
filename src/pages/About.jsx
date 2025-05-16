import React, { useEffect, useState } from 'react'

const About = ({ pageName }) => {
    const [userData, setUserData] = useState([]);
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


    return (
        <>
            <h1 className='fs-5 fw-semibold mb-3'>{pageName}</h1>
            <div className='d-flex align-items-center gap-3 mb-3'>
                <h3 style={{ color: `${color}` }}>{time}</h3>
                <select defaultValue="green" onChange={colorHandle} className='border p-2'>
                    <option value="red">Red</option>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                    <option value="green">Green</option>
                </select>
            </div>

            <table className='table table-hover table-bordered table-striped-columns'>
                <thead className='table-secondary'>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={user.id}>
                            <td>#{index}</td>
                            <td>{user.name} - {user.username}</td>
                            <td>{user.email}</td>
                            <td><a rel="noreferrer" href={`https://${user.website}`} target='_blank'>{user.website}</a></td>
                            <td>{user.phone}</td>
                            <td>{user.address.city} - <br /> {user.address.street}, {user.address.suite}, {user.address.zipcode} </td>
                            <td>{user.company.bs} - {user.company.catchPhrase}, {user.company.name} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default About
