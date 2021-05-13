import { useState } from 'react';

import './App.css';
import DisplayTasks from './DisplayTasks';

function App() {

  const [isVisible, setIsVisible]=useState(false);
  const [timeSlots , setTimeSlots] = useState([
    "","07:00 am","07:30 am","08:00 am","08:30 am","09:00 am","09:30 am","10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","01:00 pm","01:30 pm","02:00 pm","02:30 pm",
  ]);
  const [userss , setUsers] = useState([
    "Prem Kumar","User 1","User 2","User 3","User 4","User 5",
  ])


  return (
    <div className="main">
      <div className="displaybox">
        <div className="tasks">Tasks 0</div>
        <div className="plus" onClick={()=> setIsVisible(!isVisible)} >+</div>
      </div>
      {
        isVisible 
        ? <div className="mainbox">
        <div className="taskDescBox">
            <label>Task Description</label>
            <input type="text" />
        </div>
        <div className="datetimeBox">
            <div className="dateBox">
                <label>Date</label>
                <input type="date" />
            </div>
            <div className="timeBox">
                <label>Time</label>
                <select>
                {timeSlots.map((item,index)=>{
                  return(
                    <option value={index}>{item}</option>
                  );
                })}
              </select>
            </div>
        </div>
        <div className="userBox">
            <label>Assign User</label>
            <select>
              {userss.map((item,index)=>{
                  return(
                    <option value={index}>{item}</option>
                  );
                })}
            </select>
        </div>
        <div className="savebtnBox">
            <button className="cancelbtn" >Cancel</button>
            <button className="savebtn">Save</button>
        </div>
      </div>
      :
       null

      }
 
      <div className="lastDisplay">
        <DisplayTasks />
      </div>

    </div>
  );
}

export default App;
