import React, { useEffect, useState } from 'react'
// import React, {useLayoutEffect, useRef } from 'react'


    // const Child = ({name}) =>{
    //     return <h2>Message - {name}</h2>
    // }

const About = ({pageName}) => {

    const [userData, setUserData] = useState([]);

    const [time, setTime] = useState(0); 
    const [color, setColor] = useState("green"); 


    useEffect(() => {
        setInterval(() =>{
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    },[])

    //     const useFetch = (url) => {
    //         const [data, setData] = useState(null);
        
    //         useEffect(() => {
    //             fetch(url)
    //                 .then((res) => res.json())
    //                 .then((data) => setData(data));
    //         }, [url]);
        
    //         return data;
    //     };
    //     const boxRef = useRef(null);
    // const [width, setWidth] = useState(0);

    // useLayoutEffect(() => {
    //     //setWidth(boxRef.current.offsetWidth);
    // }, []);


    //const users = useFetch("https://jsonplaceholder.typicode.com/users");

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( res =>{
            if(!res.ok)  throw new Error("Failed to fetch products");
            return res.json();
        })
        .then((data) =>{
            setUserData(data)
            console.log('API Data', data)
        })
        .catch(error =>{
            console.error('Error data', error)
        })
    }, [])



    const colorHandle = (event) =>{
        const colorName = event.target.value;
        setColor(colorName);
    }



    return (
        <>
        {/* <div ref={boxRef} style={{ width: "200px", height: "100px", background: "blue" }} />
        <p>Box Width: {width}px</p> */}
            <h1 className='fs-5 fw-semibold mb-3'>{pageName}</h1>

            <div className='d-flex align-items-center gap-3 mb-3'>
                <h3 style={{color: `${color}`}}>{time}</h3>
                <select onChange={colorHandle} className='border p-2'>
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
                        <td>{user.address.city} - <br/> {user.address.street}, {user.address.suite}, {user.address.zipcode} </td>
                        <td>{user.company.bs} - {user.company.catchPhrase}, {user.company.name} </td>
                    </tr>
                ))}
                    </tbody>
                
            </table>
            {/* <pre>{JSON.stringify(users, null, 2)}</pre>
            <Child name="Anaya Rathore" /> */}
        </>
    )
}

export default About
