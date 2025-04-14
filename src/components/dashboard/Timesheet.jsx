import React, { useState, useEffect } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";



const taskInitial = [
    { id: 1, title: "E-commerce integration", time: 0, status: "idle" },
    { id: 2, title: "Application integration", time: 0, status: "idle" },
]

const MAX_TIME = 300;

const Timesheet = () => {

    const [tasks, setTasks] = useState(taskInitial);
    const [activeTask, setActiveTask] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    

    useEffect(() => {
        let interval = null;
      
        if (isPlaying && activeTask !== null) {
            interval = setInterval(() => {
                setTasks(prev =>
                prev.map(task =>
                    task.id === activeTask
                    ? { ...task, time: task.time + 1 }
                    : task
                )
                );
            }, 1000);
        }
      
        return () => clearInterval(interval); 
    }, [isPlaying, activeTask]);
      

  

    const handleTasks = (id) =>{
        if(activeTask === id){
            setIsPlaying(!isPlaying);
        }
        else{
            setActiveTask(id);
            setIsPlaying(true);
        }
        setTasks(prev =>
            prev.map(task =>
                task.id === id 
                ? {...task, 
                    status: activeTask === id
                    ? isPlaying ? "paused" : "started"
                    : "idle"                  
                
                }
                : task
            )
        );
    };

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `00:${m}:${s}`;
    };



    return (
        <>
        <div className="cash-position bg-white shadow-sm">
            
            <ul className='list-group'>
                <li className="d-flex align-items-center list-group-item justify-content-between w-100">
                    <h3 className="fs-6 mb-0">Timesheet</h3>
                    <button type="button" className="btn btn-light rounded-pill px-4">+</button>
                </li>
                {tasks.map( ( task ) => {
                        const progressPercent = Math.min((task.time / MAX_TIME) * 100, 100);

                    return(<li className='align-items-center d-flex flex-wrap gap-2 list-group-item position-relative w-100' key={task.id}>
                        <div className="form-check form-check-inline my-2 flex-grow-1">
                            
                            <label className="form-check-label" htmlFor="inlineRadio1">
                                <input className="form-check-input"  type="radio" checked={activeTask === task.id} onChange={()=> handleTasks(task.id)}/>
                                {task.title}
                            </label>
                        </div>
                        <div className="progress w-25 my-2" style={{height: '2px'}}>
                            <div className="progress-bar" role="progressbar" aria-label="" style={{width: `${progressPercent}%`}} aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="time">
                            <span>{formatTime(task.time)}</span>
                        </div>
                        <div className="time-stop">
                            {activeTask === task.id && isPlaying ? (
                                <button type="button" className="btn bg-transparent border-0 p-0 text-danger" onClick={() => handleTasks(task.id)}>
                                    <FaCirclePause size={25}/>
                                </button>
                                ):(

                                <button type="button" className="btn bg-transparent border-0 p-0 text-primary" onClick={() => handleTasks(task.id)}>
                                    <FaCirclePlay size={25}/>
                                </button>
                            )}
                            
                        </div>
                        <div className="user">
                            <span className="name-user">Dr</span>
                        </div>
                        <div className="delete">
                            <button type="button" className="btn bg-transparent border-0 p-0 text-danger">
                                <RiDeleteBinLine size={25}/>
                            </button>
                        </div>
                    </li>
                    );
                 })}


                
                </ul>
        </div>

        </>
    )
}

export default Timesheet
