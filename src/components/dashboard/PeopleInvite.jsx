import React from 'react'
import './PeopleInvite.css';
import { LuUserRoundPlus } from "react-icons/lu";




const PeopleInvite = ({props, user}) => {
    let  usersList = JSON.parse(localStorage.formData2)
    console.log(usersList,"------sv sfdxvs--");

    const colors = ["#FFCDD2", "#C5E1A5", "#B3E5FC", "#FFF9C4", "#D1C4E9", "#FFECB3"];
    const maxUserVisible = 5;


    return (
        <>
            <div className="home d-flex justify-content-between mb-3 flex-wrap gap-3 border-bottom">
                <div className="pagename">
                    <div className="dropdown">
                        <button type="button" className="btn border-0 d-inline-flex align-items-center gap-1 px-3 bg-transparent text-white dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                        ><LuUserRoundPlus /> Invite People</button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <button type="button" className="dropdown-item">
                                    <img src="images/user.jpg" alt="e" width="40" height="40" />
                                    <span>{user.name}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="work-user d-flex align-items-center justify-content-center me-auto ps-5">
                    {usersList?.slice(0, maxUserVisible).map((item, index) => (
                        <span className={`user-icon border-2 fw-semibold d-flex align-items-center justify-content-center border-primary border rounded-circle overflow-hidden d-flex`}  
                        key={index}
                        style={{
                            backgroundColor: colors[index % colors.length],
                        
                          }}
                        
                        >
                            {item.name?.substring(0, 2).toUpperCase()}
                        </span>

                    ))}

                    {usersList?.length > maxUserVisible && (
                        <span
                            className="user-icon border-2  fw-semibold border-primary border rounded-circle d-flex align-items-center justify-content-center overflow-hidden d-flex bg-white align-items-center justify-content-center"
                        >
                            {usersList.length}
                        </span>
                    )}

                    </div>
                </div>
        </>
    )
}

export default PeopleInvite
