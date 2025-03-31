import React from "react";
//import axios from "axios";

const HomeLayout = ({ user, usersList }) => {
    // const [messages, setMessages] = useState([]);
    // const [input, setInput] = useState("");

    // const handleSendMessage = async () => {
    //     if (!input) return;

    //     const newMessages = [...messages, { role: "user", content: input }];
    //     setMessages(newMessages);

    //     try {
    //         const response = await axios.post(
    //             "https://api.openai.com/v1/chat/completions",
    //             {
    //                 model: "gpt-3.5-turbo",
    //                 messages: newMessages,
    //             },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );

    //         console.log("Response:", response.data);
    //         setMessages([...newMessages, response.data.choices[0].message]);
    //     } catch (error) {
    //         console.error("API Error:", error.response ? error.response.data : error.message);
    //     }

    //     setInput("");
    // };

    return (
        <>  
            <h2>Welcome, {user?.name}</h2>



            <h3>Logged-in Users List</h3>
            <ul>
                {usersList.map((item, index) => {
                    console.log('listed', usersList); 
                    return <li key={index}>{item.name} - {item.email}</li>; // ✅ Return JSX properly
                })}
            </ul>

            
      


            {/* <div className="border p-4">
                {messages.map((msg, index) => (
                    <p key={index}>
                        <b>{msg.role}:</b> {msg.content}
                    </p>
                ))}
            </div>

            <div className="flex">
                <input
                    type="text"
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="btn btn-primary" onClick={handleSendMessage}>
                    Send
                </button>
            </div> */}
        </>
    );
};

export default HomeLayout;
