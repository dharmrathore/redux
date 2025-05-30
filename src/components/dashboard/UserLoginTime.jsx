import React from 'react'
import { LuCalendarDays } from "react-icons/lu";

const UserLoginTime = ({user}) => {


    const getGreeting = () =>{
        const hour = new Date().getHours();
        if( hour >= 5 && hour < 12)return "Good Morning";
        if( hour >= 12 && hour < 17)return "Good Afternoon";
        if( hour >= 17 && hour < 21)return "Good Evening";
        return "Good Night!";
    } 

    // Safely parse the date with error handling
    const getFormattedDate = () => {
        try {
            if (!user?.loginTime) return 'No login time available';
            
            const loginDate = new Date(user.loginTime);
            if (isNaN(loginDate.getTime())) {
                return 'Invalid date';
            }

            return loginDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Error displaying date';
        }
    }

  return (
    <>
        <div className="goodmorning-sec">
            <div className="align-items-center bg-gradient bg-light border d-flex justify-content-between mb-3 px-3 py-2 rounded shadow-sm">
                <span>{getGreeting()} ! <strong className='text-success'>{user?.name || 'User'}</strong> </span>
                <span className='d-flex align-items-center gap-1'><LuCalendarDays />  {getFormattedDate()}</span>
    
            </div>
        </div>
    </>
  )
}

export default UserLoginTime
