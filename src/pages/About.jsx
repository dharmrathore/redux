import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'


    const Child = ({name}) =>{
        return <h2>Message - {name}</h2>
    }

const About = () => {

    const useFetch = (url) => {
        const [data, setData] = useState(null);
      
        useEffect(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => setData(data));
        }, [url]);
      
        return data;
    };
    const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth);
  }, []);


    const users = useFetch("https://jsonplaceholder.typicode.com/users");
    return (
        <>
        <div ref={boxRef} style={{ width: "200px", height: "100px", background: "blue" }} />
        <p>Box Width: {width}px</p>
            <h1>About page</h1>
            <pre>{JSON.stringify(users, null, 2)}</pre>
            <Child name="Anaya Rathore" />
        </>
    )
}

export default About
